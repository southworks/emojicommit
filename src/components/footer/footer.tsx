import React from 'react';
import { transitionSec } from '../../utils/styles';

interface HeaderProps {
  primColor: string;
  secColor: string;
}

const Footer = (props: HeaderProps): JSX.Element => {
  const { primColor, secColor } = props;

  return (
    <footer className={`${transitionSec} bg-${secColor}-500 py-4 px-20 `}>
      <h2 className='flex flex-wrap mr-auto text-xl font-bold'>
        You can suggest changes or new emojis in{' '}
        <a
          className={`${transitionSec} px-2 text-${primColor}-700`}
          href='https://github.com/southworks/emojicommit'
          target='_blank'
          rel='noopener noreferrer'>
          GitHub
        </a>
        by creating an issue or pull request.
      </h2>
    </footer>
  );
};

export default Footer;
