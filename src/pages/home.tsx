import React, { useState, useEffect } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Clipboard from '../components/clipboard/clipboard';
import { colors, random } from '../utils/color-list';
import EmojiList from '../components/emoji-list/emoji-list';
import Filter from '../components/filter/filter';
import { transitionSec } from '../utils/styles';
import { useThemeColor, ActionTypes } from '../state/themeContext';

const Home = (): JSX.Element => {
  const [stringCopied, setStringCopied] = useState('');
  const [filterString, setFilterString] = useState('');
  const { themeColors, setThemeColor } = useThemeColor();
  const { primaryColor } = themeColors;

  useEffect(() => {
    const randColorIndex = Math.floor(random() * 10) % 9;
    setThemeColor({
      type: ActionTypes.SetTheme,
      value: colors[randColorIndex],
    });
  }, [stringCopied, setThemeColor]);

  return (
    <div className={`${transitionSec} bg-${primaryColor}-100 min-h-screen`}>
      <Clipboard name={stringCopied} />
      <Header />
      <Filter setFilterString={setFilterString} filterString={filterString} />
      <div style={{ minHeight: '51.7vh' }}>
        <EmojiList copyString={setStringCopied} filterString={filterString} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
