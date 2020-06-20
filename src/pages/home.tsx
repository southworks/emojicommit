import React, { useState } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Clipboard from '../components/clipboard/clipboard';
import { colors } from '../utils/color-list';
import EmojiList from '../components/emoji-list/emoji-list';
import Filter from '../components/filter/filter';
import { transitionSec } from '../utils/styles';

const Home = (): JSX.Element => {
  const [stringCopied, setStringCopied] = useState('');
  const randColorIndex = Math.floor(Math.random() * 10) % 9;
  const primColor = colors[randColorIndex];
  const secColor = colors[(randColorIndex + 2) % 9];

  return (
    <div className={`${transitionSec} bg-${primColor}-100`}>
      <Clipboard color={secColor} name={stringCopied} />
      <Header {...{ primColor, secColor }} />
      <Filter color={secColor} />
      <EmojiList copyString={setStringCopied} />
      <Footer primColor={primColor} secColor={secColor} />
    </div>
  );
};

export default Home;
