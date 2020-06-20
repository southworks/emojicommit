import React from 'react';
import Emoji from '../emoji/emoji';
import { EmojiData } from '../../models/emoji-data';
import './styles.scss';

interface EmojiCardProps {
  setStringCopied: (_: string) => void;
  emoji: EmojiData;
}

const EmojiCard = (props: EmojiCardProps): JSX.Element => {
  const { setStringCopied, emoji } = props;
  return (
    <div className='bg-white shadow-lg rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 hover:shadow-2xl m-4 cw border border-gray-200'>
      <div className='flex flex-col w-full h-48 text-center justify-center'>
        <span className={`text-6xl p-12 bg-${emoji.color}-400`}>
          <Emoji name={emoji.emoji} setStringCopied={setStringCopied} />
        </span>
      </div>
      <div
        className={`flex items-center px-6 py-3 bg-gray-900 justify-center bg-${emoji.color}-700`}>
        <h1 className='mx-3 text-white font-semibold text-lg'>
          <Emoji name={emoji.code} setStringCopied={setStringCopied} />
        </h1>
      </div>
      <div className='flex py-4 px-6 justify-center'>
        <p className='py-2 text-lg text-gray-600 text-center'>{emoji.text}</p>
      </div>
    </div>
  );
};

export default EmojiCard;
