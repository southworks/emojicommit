import React from 'react';
import Emoji from '../emoji/emoji';
import './styles.scss';

interface EmojiCardProps {
  setStringCopied: (_: string) => void;
}

const EmojiCard = (props: EmojiCardProps): JSX.Element => {
  const { setStringCopied } = props;
  return (
    <div className='bg-white shadow-lg rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:shadow-2xl m-4 max-w-xxs sm:max-w-xs max-w-md border border-gray-200'>
      <div className='flex flex-col w-full h-48 text-center justify-center'>
        <span className='text-6xl p-8'>
          <Emoji name={`⚡️`} setStringCopied={setStringCopied} />
        </span>
      </div>
      <div className='flex items-center px-6 py-3 bg-gray-900 justify-center'>
        <h1 className='mx-3 text-white font-semibold text-lg'>
          <Emoji name={`Yeet`} setStringCopied={setStringCopied} />
        </h1>
      </div>
      <div className='flex py-4 px-6 justify-center'>
        <p className='py-2 text-lg text-gray-600 text-center'>
          Full Stack maker makermaker maker maker
        </p>
      </div>
    </div>
  );
};

export default EmojiCard;
