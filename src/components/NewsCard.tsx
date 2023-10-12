import { NewsProps } from '../types';
import calculateDays from '../utils/functions';

const NewsCard = ({ news }: NewsProps) => {
  const { titulo, introducao, data_publicacao, link } = news   
  return(
    <div>
      <h1>{titulo}</h1>
      <p>{introducao}</p>      
      <p>{calculateDays(data_publicacao)}</p>
      <a href={ link } target='_blank'>Leia a notícia aqui</a>
    </div>
  )
}

export default NewsCard;