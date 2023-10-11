import { NewsProps } from '../types';

const NewsCard = ({ news }: NewsProps) => {
  const { titulo, introducao } = news
  return(
    <div>
      <h1>{titulo}</h1>
      <p>{introducao}</p>
    </div>
  )
}

export default NewsCard;