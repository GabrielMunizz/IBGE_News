import Home from './components/Home';
import { GlobalStyle } from './styles/globalStyle';
import NewsContext from './context/NewsContext';
import useCategories from './hooks/useCategories';
function App() { 
  const { dispatch, favorite } = useCategories();

  return (
    <>
      <NewsContext.Provider value={ { dispatch, favorite } }>
        <GlobalStyle />
        <Home />
      </NewsContext.Provider>
    </>
  );
}

export default App
