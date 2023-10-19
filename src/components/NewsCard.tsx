import { NewsProps } from '../utils/types';
import { calculateDays } from '../utils/functions';
import fav from '../images/checked_heart.png';
import unFav from '../images/empty_heart.png';
import useLocalStorage from '../hooks/useLocalStorage';
import * as S from '../styles/newsCard';

function NewsCard({ news, gridOrList }: NewsProps) {
  const { titulo, introducao, data_publicacao: dataPublicacao, link } = news;
  const { isFavorite, handleFavorite } = useLocalStorage(news);
  return (
    <S.NewsCard className={ gridOrList ? '' : 'list' }>
      <h1>{titulo}</h1>
      <p>{introducao}</p>
      <S.Sub>
        <p>{ calculateDays(dataPublicacao) }</p>
        <a href={ link } target="_blank" rel="noreferrer">
          Leia a notícia aqui
        </a>
      </S.Sub>
      <S.BtnContainer>
        <button onClick={ handleFavorite }>
          <img src={ isFavorite ? fav : unFav } alt="favorite button" />
        </button>
      </S.BtnContainer>
    </S.NewsCard>
  );
}

export default NewsCard;
