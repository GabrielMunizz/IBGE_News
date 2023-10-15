import useFavorite from '../hooks/useFavorite';
import { NewsProps } from '../utils/types';
import { calculateDays } from '../utils/functions';
import fav from '../images/checked_heart.png';
import unFav from '../images/empty_heart.png';

const Cover = ({ news }: NewsProps) => {
  const { titulo, introducao, imagens, data_publicacao, link } = news
  const { isFavorite, handleFavorite } = useFavorite(news);
  const convertedImage = JSON.parse(imagens).image_intro;
  const imageURL = `https://agenciadenoticias.ibge.gov.br/${convertedImage}` 
  return (
    <section>
      <div>
        <img src={imageURL} alt="" />
      </div>
      <div>
        <h4>Notícia mais recente</h4>
        <button onClick={handleFavorite}>
          <img src={isFavorite ? fav : unFav} alt="favorite button" />
        </button>
        <h1>{titulo}</h1>
        <p>{introducao}</p>
        <p>{calculateDays(data_publicacao)}</p>
        <a href={link}>Leia a notícia aqui</a>
      </div>
    </section>
  );
}

export default Cover;