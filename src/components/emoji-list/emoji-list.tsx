import React from 'react';
import emojis from '../../data/emojis.json';
import EmojiCard from '../../components/emoji-card/emoji-card';
import { EmojiData } from '../../models/emoji-data';

interface EmojiListProps {
  copyString: (_: string) => void;
}

const EmojiList = (props: EmojiListProps): JSX.Element => {
  const { copyString } = props;
  return (
    <div className='flex flex-wrap max-w-screen-xl justify-center mt-8 mx-auto'>
      {emojis.map((emoji: EmojiData) => (
        <EmojiCard
          key={`emojikey-${emoji.id}`}
          setStringCopied={copyString}
          emoji={emoji}
        />
      ))}
    </div>
  );
};

export default EmojiList;
