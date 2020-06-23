/* eslint-disable @typescript-eslint/no-var-requires */
const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient({ region: 'sa-east-1' });
const tableName = 'em-commits-order';

exports.handler = (event, ctx, callback) => {
  const params = {
    TableName: tableName,
    Key: {
      id: event.id,
    },
    UpdateExpression: 'ADD copiedTimes :copiedTimes',
    ExpressionAttributeValues: {
      ':copiedTimes': 1,
    },
    ReturnValues: 'NONE',
  };

  documentClient.update(params, function (err, data) {
    if (err) {
      console.log('Error', err);
      const errResponse = {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ Error: 500, device: 'DynamoDB', detail: err }),
      };
      callback(null, errResponse);
    } else {
      console.log('Success', params.Items);
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify('upsert complete.'),
      };
      callback(null, response);
    }
  });
};
