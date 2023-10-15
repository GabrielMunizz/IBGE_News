import { useReducer } from 'react';
import { IBGE_News, CategoriesAction } from '../utils/types';

const useCategories = () => {   
  const initialState = {
    favorites: [] as IBGE_News[],
    recentNews: [] as IBGE_News[],
    typeNews: [] as IBGE_News[],
    typeRelease: [] as IBGE_News[],
  }
  const reducer = (state= initialState, action: CategoriesAction) => {
    switch (action.type) {
      case 'favorites':
        return {
          favorites: [...action.payload],
          recentNews: [] as IBGE_News[],
          typeNews: [] as IBGE_News[],
          typeRelease: [] as IBGE_News[],
        };
      case 'addFavorites':
        return {
          favorites: [...state.favorites, action.payload],
          recentNews: [] as IBGE_News[],
          typeNews: [] as IBGE_News[],
          typeRelease: [] as IBGE_News[],
        };
      case 'removeFavorites':
        return {
          favorites: state.favorites.filter((news) => news.id !== action.payload.id),
          recentNews: [] as IBGE_News[],
          typeNews: [] as IBGE_News[],
          typeRelease: [] as IBGE_News[],
        };
      case 'typeNews':
        return {
          favorites: [] as IBGE_News[],
          recentNews: [] as IBGE_News[],
          typeNews: [...action.payload],
          typeRelease: [] as IBGE_News[],
        };
      case 'typeRelease':
        return {
          favorites: [] as IBGE_News[],
          recentNews: [] as IBGE_News[],
          typeNews: [] as IBGE_News[],
          typeRelease: [...action.payload],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);  

  return {
    dispatch,
    favorite: state.favorites,    
    typeNews: state.typeNews,
    typeRelease: state.typeRelease,
  }
}

export default useCategories;