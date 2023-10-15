import Home from './components/Home';
import { GlobalStyle } from './styles/globalStyle';
import NewsContext from './context/NewsContext';
import useFavorite from './hooks/useFavorite';

function App() {
  const { dispatch, favorite } = useFavorite();

  return (
    <NewsContext.Provider value={ { dispatch, favorite } }>
      <GlobalStyle />
      <Home />
    </NewsContext.Provider>
  );
}

export default App;
