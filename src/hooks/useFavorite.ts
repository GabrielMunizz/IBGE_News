import { useReducer } from 'react';
import { IBGENews, CategoriesAction } from '../utils/types';

const useFavorite = () => {
  const initialState = {
    favorites: [] as IBGENews[],
  };
  const reducer = (state = initialState, action: CategoriesAction) => {
    switch (action.type) {
      case 'favorites':
        return {
          favorites: [...action.payload],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    dispatch,
    favorite: state.favorites,
  };
};

export default useFavorite;
