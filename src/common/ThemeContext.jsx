// ThemeContext.js
import React, { createContext, useState, useContext ,useEffect} from 'react';

// Create a context with 'light' as the default value
const ThemeContext = createContext('light');

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(()=>
    localStorage.getItem('theme')||'light'
  );
useEffect(()=>{
    document.body.setAttribute('data-theme',theme);
    localStorage.setItem('theme',theme);
},[theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};
