import React, { useContext, useEffect, useState } from 'react';

export const ThemeContext = React.createContext({
  theme: 'light',
  setTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  console.log('ThemeContext', theme);

  // useEffect(() => {
  //   console.log('Effect ThemeContext');
  // }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme };
};
