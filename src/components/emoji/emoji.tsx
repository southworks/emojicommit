import React from 'react';

interface EmojiProps {
  name: string;
  setStringCopied: (_: string) => void;
}

const Emoji = (props: EmojiProps): JSX.Element => {
  const { name, setStringCopied } = props;
  return (
    <button
      className='transition duration-500 ease-in-out focus:outline-none focus:opacity-25 opacity-100 transform hover:-translate-y-1 font-semibold'
      onClick={() => {
        setStringCopied(name);
        navigator.clipboard.writeText(name);
      }}>
      {name}
    </button>
  );
};

export default Emoji;
