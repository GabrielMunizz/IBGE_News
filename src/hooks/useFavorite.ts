import { useState } from 'react';
import { IBGE_News } from '../utils/types';
import { useContext } from 'react';
import NewsContext from '../context/NewsContext';

const useFavorite = (news: IBGE_News) => {
  const newsContext = useContext(NewsContext);
  const { dispatch } = newsContext;
  // case news is found in localStorage return true
  // caso news seja encontrado no localStorage retorna true

  const [isFavorite, setIsFavorite] = useState(() => {
    const isOnLocal = localStorage.getItem('favorite');
    if (isOnLocal) {
      const loadLocal: IBGE_News[] = JSON.parse(isOnLocal);
      const findFavorite = loadLocal.some((favNews) => favNews.id === news.id);

      return findFavorite;
    }

    return false;
  });

  const handleFavorite = () => {    
    // function checks localStorage, if exists key 'favorite'. If so, checks if id exists in favorite and if it does, unfavorite on click. If not, add news to favorite. Else creates key 'favorite' and add the news.
    // função checa no localStorage se existe uma key 'favorite'. Caso sim, checa se id consta nos favoritos e se for o caso, desfavorita ao clicar. Caso não conste nos favoritos, adiciona. Caso não exista a key, cria uma e adiciona a noticia.

    const isOnLocal = localStorage.getItem('favorite');
    if (isOnLocal) {
      let loadLocal: IBGE_News[] = JSON.parse(isOnLocal);
      if (isFavorite) {
        loadLocal = loadLocal.filter((favNews) => favNews.id !== news.id);
        dispatch({ type: 'favorites', payload: loadLocal })       
      } else {
        loadLocal.push(news);
        dispatch({ type: 'favorites', payload: loadLocal })      
      }      
      localStorage.setItem('favorite', JSON.stringify(loadLocal));     
    } else {      
      localStorage.setItem('favorite', JSON.stringify([news]));
    }
    setIsFavorite((prev) => !prev);
  }; 
  return {
    isFavorite,
    handleFavorite,
  };
};

export default useFavorite;
