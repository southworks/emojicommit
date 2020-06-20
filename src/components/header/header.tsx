import React, { useState, useEffect } from 'react';
import emojis from '../../data/emojis.json';
import { transitionSec } from '../../utils/styles';
import { useThemeColor } from '../../themeContext';

const emojiList = emojis.map(emoji => emoji.emoji);

const Header = (): JSX.Element => {
  const { themeColors } = useThemeColor();
  const { primaryColor, secondaryColor } = themeColors;
  const [emoji, setEmoji] = useState(`🎨`);

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
      className={`${transitionSec} bg-${primaryColor}-500 py-12 px-20 text-center`}>
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
        className={`${transitionSec} bg-${secondaryColor}-500 hover:bg-${secondaryColor}-light text-white font-bold py-2 px-4 hover:border-${secondaryColor}-500 border-b-4 border-${secondaryColor}-700 border-${secondaryColor}-500 rounded focus:outline-none`}>
        {`🎩 GitHub`}
      </a>
    </header>
  );
};

export default Header;
