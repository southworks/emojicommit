import React, { useState, useEffect } from 'react';
import emojis from '../../data/emojis.json';

const emojiList = emojis.map(emoji => emoji.emoji);

interface HeaderProps {
  primColor: string;
  secColor: string;
}

const Header = (props: HeaderProps): JSX.Element => {
  const [emoji, setEmoji] = useState(`🎨`);
  const { primColor, secColor } = props;

  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.floor(Math.random() * 10);
      setEmoji(emojiList[rand]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <header
      className={`transition duration-500 ease-in-out bg-${primColor}-500 py-12 px-20 text-center`}>
      <span className='text-6xl' role='img' aria-label='emoji'>
        {emoji}
      </span>
      <h2 className='mb-6 text-3xl font-bold'>
        Emojis for your commit messages
      </h2>
      <a
        href='https://github.com/southworks/emojicommit'
        target='_blank'
        rel='noopener noreferrer'
        className={`bg-${secColor}-500 hover:bg-${secColor}-light text-white font-bold py-2 px-4 hover:border-${secColor}-500 border-b-4 border-${secColor}-700 border-${secColor}-500 rounded focus:outline-none`}>
        {`🎩 GitHub`}
      </a>
    </header>
  );
};

export default Header;
