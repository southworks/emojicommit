import React, { useState } from 'react';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import EmojiCard from '../components/emoji-card/emoji-card';
import Clipboard from '../components/clipboard/clipboard';
import { colors } from '../utils/color-list';

const Home = (): JSX.Element => {
  const [stringCopied, setStringCopied] = useState('');
  const randColorIndex = Math.floor(Math.random() * 10) % 9;
  const primColor = colors[randColorIndex];
  const secColor = colors[(randColorIndex + 2) % 9];

  return (
    <div className={`bg-${primColor}-100`}>
      <Clipboard color={secColor} name={stringCopied} />
      <Header {...{ primColor, secColor }} />
      <div className='flex flex-wrap max-w-screen-xl justify-center mt-8 mx-auto'>
        <EmojiCard setStringCopied={setStringCopied} />
        <EmojiCard setStringCopied={setStringCopied} />
        <EmojiCard setStringCopied={setStringCopied} />
        <EmojiCard setStringCopied={setStringCopied} />
        <EmojiCard setStringCopied={setStringCopied} />
        <EmojiCard setStringCopied={setStringCopied} />
        <EmojiCard setStringCopied={setStringCopied} />
      </div>
      <Footer primColor={primColor} secColor={secColor} />
    </div>
  );
};

export default Home;
