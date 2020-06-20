import React, { useState, useEffect } from 'react';
import emojis from '../../data/emojis.json';
import EmojiCard from '../../components/emoji-card/emoji-card';
import { EmojiData } from '../../models/emoji-data';

interface EmojiListProps {
  filterString: string;
  copyString: (_: string) => void;
}

const EmojiList = (props: EmojiListProps): JSX.Element => {
  const [emojiList, setEmojiList] = useState(emojis);
  const { filterString, copyString } = props;

  useEffect(() => {
    setEmojiList(
      emojis.filter(
        emoji =>
          emoji.code.toLocaleLowerCase().includes(filterString) ||
          emoji.text.toLocaleLowerCase().includes(filterString),
      ),
    );
  }, [filterString]);

  return (
    <div className='flex flex-wrap max-w-screen-xl justify-center mt-8 mx-auto'>
      {emojiList.map((emoji: EmojiData) => (
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
