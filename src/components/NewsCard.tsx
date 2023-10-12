import { NewsProps } from '../types';
import calculateDays from '../utils/functions';

const NewsCard = ({ news }: NewsProps) => {
  const { titulo, introducao, data_publicacao  } = news
  return(
    <div>
      <h1>{titulo}</h1>
      <p>{introducao}</p>      
      <p>{calculateDays(data_publicacao)}</p>
    </div>
  )
}

export default NewsCard;