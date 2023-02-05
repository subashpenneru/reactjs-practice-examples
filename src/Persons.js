import React, { useEffect } from 'react';
import { useTheme } from './context/theme';
import PersonItem from './PersonItem';

const Persons = () => {
  // const { theme } = useTheme();

  console.log('Persons');

  // useEffect(() => {
  //   console.log('Effect Persons');
  // }, []);

  return (
    <div>
      <h1>Persons</h1>
      <PersonItem />
    </div>
  );
};

export default Persons;
