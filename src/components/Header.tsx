import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useContext } from 'react';
import logo from '../images/image 68.png';
import * as S from '../styles/header';
import NewsContext from '../context/NewsContext';

function Header() {
  const newsContext = useContext(NewsContext);
  const { toggleTheme, isDark } = newsContext;
  return (
    <S.Header>
      <img src={ logo } alt="Logo" />
      <h1>Trybe News</h1>
      <button onClick={ toggleTheme } data-testid="darkmodeBtn">
        { isDark ? <MdLightMode alt="light mode" /> : <MdDarkMode alt="dark mode" /> }
      </button>
    </S.Header>
  );
}

export default Header;
