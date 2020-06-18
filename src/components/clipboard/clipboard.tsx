import React, { useEffect, useState } from 'react';

interface ClipboardProps {
  color: string;
  name: string;
}

const Clipboard = (props: ClipboardProps): JSX.Element => {
  const { color, name } = props;
  const [hideOnTimer, setHideOnTimer] = useState('hidden');

  useEffect(() => {
    if (name) {
      setHideOnTimer('');
    }
    const timeout = setTimeout(() => setHideOnTimer('hidden'), 2500);
    return () => {
      clearTimeout(timeout);
    };
  }, [name]);

  return (
    <div
      className={`transition ease-in-out duration-700 flex fixed mt-4 ml-4 justify-center font-bold bg-${color}-500 rounded ${hideOnTimer} z-20`}>
      <div className='p-4'>
        <span>Copied</span>
        <span className='bg-gray-400 rounded px-2 py-1 mx-2'>{name}</span>
        <span>to the clipboard!</span>
      </div>
      <button
        className='flex self-start pr-4 pt-1 font-bold focus:outline-none'
        onClick={() => setHideOnTimer('hidden')}>
        x
      </button>
    </div>
  );
};

export default Clipboard;
