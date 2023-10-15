import { createContext } from 'react';
import { CategoriesAction, IBGENews } from '../utils/types';

export type NewsContextType = {
  dispatch: React.Dispatch<CategoriesAction>;
  favorite: IBGENews[];
  isDark: boolean;
  toggleTheme: () => void;
};

const NewsContext = createContext({} as NewsContextType);

export default NewsContext;
