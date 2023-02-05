import React, { useEffect } from 'react';
import { useTheme } from './context/theme';

const PersonItem = () => {
  const { theme } = useTheme();
  console.log('PersonItem', theme);

  // useEffect(() => {
  //   console.log('Effect PersonItem');
  // }, []);

  return <div>PersonItem</div>;
};

export default PersonItem;
