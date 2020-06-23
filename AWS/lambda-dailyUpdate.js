/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require('child_process');
const fs = require('fs');

const AWS = require('aws-sdk');
// Set the region
AWS.config.update({ region: 'sa-east-1' });

const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const encrypted = process.env.github_token;

const processAfterDecrypt = decrypted => {
  execSync('rm -rf /tmp/*', { encoding: 'utf8', stdio: 'inherit' });
  execSync(
    `cd /tmp && git clone https://${decrypted}@github.com/southworks/emojicommit.git`,
    { encoding: 'utf8', stdio: 'inherit' },
  );
  execSync(
    `cd /tmp/emojicommit && git config user.email '' && git config user.name ''`,
    { encoding: 'utf8', stdio: 'inherit' },
  );

  const params = {
    TableName: 'em-commits-order',
  };

  console.log('pre-scan');

  ddb.scan(params, function (err, data) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Success', data);
      const formattedData = data.Items.map(element => {
        return {
          id: parseInt(element.id.N, 10),
          value: parseInt(element.copiedTimes.N, 10),
        };
      })
        .sort((a, b) => a.value - b.value)
        .map(element => element.id);

      console.log(JSON.stringify(formattedData));

      fs.writeFileSync(
        '/tmp/emojicommit/src/data/sortOrder.json',
        JSON.stringify(formattedData),
        function (error) {
          if (error) {
            console.log('writeFile failed: ' + error);
          } else {
            console.log('writeFile succeeded');
          }
        },
      );

      execSync(
        'cd /tmp/emojicommit && git add . && git commit -m ":robot: Automatically update emoji sort order" && git push',
        { encoding: 'utf8', stdio: 'inherit' },
      );
    }
  });
};

exports.handler = event => {
  console.log(event);
  let decrypted = '';
  if (!decrypted) {
    // Decrypt code should run once and variables stored outside of the
    // function handler so that these are decrypted once per container
    const kms = new AWS.KMS();
    try {
      const req = { CiphertextBlob: Buffer.from(encrypted, 'base64') };
      kms.decrypt(req, function (err, data) {
        if (err) {
          console.log('Error', err);
        } else {
          decrypted = data.Plaintext.toString('utf-8');
          processAfterDecrypt(decrypted);
        }
      });
    } catch (err) {
      console.log('Decrypt error:', err);
      throw err;
    }
  }
};
