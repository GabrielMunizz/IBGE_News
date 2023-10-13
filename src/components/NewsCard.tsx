import { NewsProps } from '../types';
import calculateDays from '../utils/functions';
import fav from '../images/checked_heart.png';
import unFav from '../images/empty_heart.png';
import useFavorite from '../hooks/useFavorite';

const NewsCard = ({ news }: NewsProps) => {  
  const { titulo, introducao, data_publicacao, link } = news
  const {isFavorite, handleFavorite} = useFavorite(news);
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{introducao}</p>
      <p>{calculateDays(data_publicacao)}</p>
      <a href={link} target="_blank">
        Leia a notícia aqui
      </a>
      <button onClick={handleFavorite}>
        <img src={isFavorite ? fav : unFav} alt="favorite button" />
      </button>
    </div>
  );
}

export default NewsCard;