import React, { useState, useEffect } from 'react';

const emojis = [
  `⚡️`,
  `⚡️`,
  `🔥`,
  `🐛`,
  `🚑`,
  `✨`,
  `📝`,
  `🚀`,
  `💄`,
  `🎉`,
  `✅`,
  `🔒`,
  `🍎`,
  `🐧`,
  `🏁`,
  `🤖`,
  `🍏`,
];

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
      setEmoji(emojis[rand]);
    }, 800);

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
      <h2 className='text-3xl font-bold'>Emojis for your commit messages</h2>
      <button
        className={`mt-6 bg-${secColor}-500 hover:bg-${secColor}-light text-white font-bold py-2 px-4 hover:border-${secColor}-500 border-b-4 border-${secColor}-700 border-${secColor}-500 rounded focus:outline-none`}>
        {`🎩 GitHub`}
      </button>
    </header>
  );
};

export default Header;
