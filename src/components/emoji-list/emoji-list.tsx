import React, { useState, useEffect } from 'react';
import emojis from '../../data/emojis.json';
import EmojiCard from '../../components/emoji-card/emoji-card';
import { EmojiData } from '../../models/emoji-data';
import sortOrder from '../../data/sortOrder.json';

interface EmojiListProps {
  filterString: string;
  copyString: (_: string) => void;
}

const EmojiList = (props: EmojiListProps): JSX.Element => {
  const { filterString, copyString } = props;
  const len = emojis.length;
  const [fullSortOrder] = useState(
    emojis.map((_, idx) => (!sortOrder[idx] ? len + 1 : sortOrder[idx])),
  );
  const [emojiList, setEmojiList] = useState(
    emojis.sort((a, b) =>
      fullSortOrder.indexOf(a.id) < fullSortOrder.indexOf(b.id) ? 1 : -1,
    ),
  );

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
