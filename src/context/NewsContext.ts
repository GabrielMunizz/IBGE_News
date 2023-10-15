import { createContext } from 'react'
import { CategoriesAction, IBGE_News } from '../utils/types'

export type NewsContextType = {
  dispatch: React.Dispatch<CategoriesAction>,
  favorite: IBGE_News[],  
}

const NewsContext = createContext({} as NewsContextType);

export default NewsContext;