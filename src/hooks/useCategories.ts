import { useReducer } from 'react';
import { IBGE_News, CategoriesAction } from '../utils/types';

const useCategories = () => {   
  const initialState = {
    favorites: [] as IBGE_News[],  
  }
  const reducer = (state= initialState, action: CategoriesAction) => {
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
  }
}

export default useCategories;