import React from 'react';

interface HeaderProps {
  primColor: string;
  secColor: string;
}

const Footer = (props: HeaderProps): JSX.Element => {
  const { primColor, secColor } = props;

  return (
    <footer className={`bg-${secColor}-500 py-4 px-20 `}>
      <h2 className='flex mr-auto text-xl font-bold'>
        You can suggest changes or new emojis in{' '}
        <a
          className={`px-2 text-${primColor}-700`}
          href='google.com'
          target='_blank'>
          GitHub
        </a>
        by creating an issue or pull request.
      </h2>
    </footer>
  );
};

export default Footer;
