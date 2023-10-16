import useLocalStorage from '../hooks/useLocalStorage';
import { NewsProps } from '../utils/types';
import { calculateDays } from '../utils/functions';
import fav from '../images/checked_heart.png';
import unFav from '../images/empty_heart.png';
import * as S from '../styles/cover';

function Cover({ news }: NewsProps) {
  const { titulo, introducao, imagens, data_publicacao: dataPublicacao, link } = news;
  const { isFavorite, handleFavorite } = useLocalStorage(news);
  const convertedImage = JSON.parse(imagens).image_intro;
  const imageURL = `https://agenciadenoticias.ibge.gov.br/${convertedImage}`;
  return (
    <S.Cover>
      <div id="imageContainer">
        <img src={ imageURL } alt="" />
      </div>
      <div id="newsContainer">
        <div id="recent">
          <h4>Notícia mais recente</h4>
          <button onClick={ handleFavorite }>
            <img src={ isFavorite ? fav : unFav } alt="favorite button" />
          </button>
        </div>
        <div id="newsInfo">
          <h1>{titulo}</h1>
          <p>{introducao}</p>
          <div id="btnContainer">
            <p>{calculateDays(dataPublicacao)}</p>
            <a href={ link }>Leia a notícia aqui</a>
          </div>
        </div>
      </div>
    </S.Cover>
  );
}

export default Cover;
