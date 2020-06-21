import React from 'react';
import { useTimer, ActionTypes } from '../../state/timerContext';
import { clickEmoji } from '../../services/updateEmojiClick';
import { apiTimeout } from '../../utils/constants';

interface EmojiProps {
  name: string;
  id: number;
  setStringCopied: (_: string) => void;
}

const Emoji = (props: EmojiProps): JSX.Element => {
  const { timer, setlastTime } = useTimer();
  const { id, name, setStringCopied } = props;

  const handleClick = () => {
    const now = new Date().getTime();
    if (now - timer.lastTime > apiTimeout) {
      clickEmoji(id);
      setlastTime({
        type: ActionTypes.SetlastTime,
      });
    }
  };

  return (
    <button
      className='transition duration-500 ease-in-out focus:outline-none focus:opacity-25 opacity-100 transform hover:-translate-y-1 font-semibold'
      onClick={() => {
        setStringCopied(name);
        navigator.clipboard.writeText(name);
        handleClick();
      }}>
      {name}
    </button>
  );
};

export default Emoji;
