import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import Home from './components/Home';
import { GlobalStyle } from './styles/globalStyle';
import NewsContext from './context/NewsContext';
import useFavorite from './hooks/useFavorite';
import { darkMode, lightMode } from './styles/themes';

function App() {
  const { dispatch, favorite } = useFavorite();
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkMode : lightMode;
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeProvider theme={ theme }>
      <NewsContext.Provider value={ { dispatch, favorite, toggleTheme, isDark } }>
        <GlobalStyle />
        <Home />
      </NewsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
