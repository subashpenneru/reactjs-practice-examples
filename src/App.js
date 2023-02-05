import React from 'react';

import { ThemeContextProvider } from './context/theme';
import Header from './Header';
import Persons from './Persons';

const App = () => {
  console.log('APP');
  // useEffect(() => {
  //   console.log('Effect APP');
  // }, []);

  return (
    <ThemeContextProvider>
      <div>
        <Header />
        <main>
          <Persons />
        </main>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
