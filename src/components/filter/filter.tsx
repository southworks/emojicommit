import React from 'react';
import { transitionSec } from '../../utils/styles';
import { useThemeColor } from '../../state/themeContext';

interface FilterProps {
  filterString: string;
  setFilterString: (_: string) => void;
}

const Filter = (props: FilterProps): JSX.Element => {
  const { filterString, setFilterString } = props;
  const { themeColors } = useThemeColor();
  const { secondaryColor } = themeColors;

  return (
    <div className='flex max-w-screen-xl mt-8 justify-center mx-auto'>
      <form>
        <input
          className={`p-2 focus:outline-none font-bold w-full cw rounded-sm border border-${secondaryColor}-400 ${transitionSec}`}
          type='search'
          placeholder='Filter emojis'
          value={filterString}
          onChange={e =>
            setFilterString(e.currentTarget.value.toLocaleLowerCase())
          }
        />
      </form>
    </div>
  );
};

export default Filter;
