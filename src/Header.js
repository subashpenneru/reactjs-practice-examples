import React, { useEffect } from 'react';
import { useTheme } from './context/theme';

const Header = () => {
  console.log('Header');

  const { setTheme } = useTheme();

  // useEffect(() => {
  //   console.log('Effect Header');
  // }, []);

  const onBtnClick = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <h1>Header</h1>
      <button onClick={onBtnClick}>Update Theme</button>
    </div>
  );
};

export default Header;
