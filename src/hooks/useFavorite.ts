import { useState } from 'react';
import { IBGE_News } from '../types';

const useFavorite = (news: IBGE_News) => {
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
     
    setIsFavorite((prev) => !prev);
    const isOnLocal = localStorage.getItem('favorite');
    if (isOnLocal) {
      if (isFavorite) {
        const loadLocal: IBGE_News[] = JSON.parse(
          localStorage.getItem('favorite') as string
        );
        const unFavorite = loadLocal.filter(
          (favNews) => favNews.id !== news.id
        );
        return localStorage.setItem('favorite', JSON.stringify(unFavorite));
      } else {
        const loadLocal: IBGE_News[] = JSON.parse(isOnLocal);
        const favorites = [...loadLocal, news];

        return localStorage.setItem('favorite', JSON.stringify(favorites));
      }
    }

    return localStorage.setItem('favorite', JSON.stringify([news]));
  };

  return {
    isFavorite,
    handleFavorite,
  };
};

export default useFavorite;
