import React, { useState, useEffect } from 'react';
import { transitionSec } from '../../utils/styles';
import { useThemeColor } from '../../themeContext';

const Filter = (): JSX.Element => {
  const [filterValue, setFilterValue] = useState('');
  const { themeColors } = useThemeColor();
  const { secondaryColor } = themeColors;

  useEffect(() => {
    console.log(filterValue);
  }, [filterValue]);

  return (
    <div className='flex max-w-screen-xl mt-8 justify-center mx-auto'>
      <form>
        <input
          className={`p-2 focus:outline-none font-bold w-full cw rounded-sm border border-${secondaryColor}-400 ${transitionSec}`}
          type='search'
          placeholder='Filter emojis'
          value={filterValue}
          onChange={e => setFilterValue(e.currentTarget.value)}
        />
      </form>
    </div>
  );
};

export default Filter;
