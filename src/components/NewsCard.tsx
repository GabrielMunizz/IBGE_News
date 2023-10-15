import { NewsProps } from '../utils/types';
import { calculateDays } from '../utils/functions';
import fav from '../images/checked_heart.png';
import unFav from '../images/empty_heart.png';
import useLocalStorage from '../hooks/useLocalStorage';

function NewsCard({ news }: NewsProps) {
  const { titulo, introducao, data_publicacao: dataPublicacao, link } = news;
  const { isFavorite, handleFavorite } = useLocalStorage(news);
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{introducao}</p>
      <p>{ calculateDays(dataPublicacao) }</p>
      <a href={ link } target="_blank" rel="noreferrer">
        Leia a notícia aqui
      </a>
      <button onClick={ handleFavorite }>
        <img src={ isFavorite ? fav : unFav } alt="favorite button" />
      </button>
    </div>
  );
}

export default NewsCard;
