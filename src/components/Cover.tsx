import { NewsProps } from '../types';

const Cover = ({ news }: NewsProps) => {
  const { titulo, introducao } = news
  return(
    <section>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h4>Notícia mais recente</h4>
        <h1>{titulo}</h1>
        <p>{introducao}</p>
      </div>
    </section>
  )
}

export default Cover;