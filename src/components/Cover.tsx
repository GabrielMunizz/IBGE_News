import { NewsProps } from '../types';
import calculateDays from '../utils/functions';

const Cover = ({ news }: NewsProps) => {
  const { titulo, introducao, imagens, data_publicacao } = news
  const convertedImage = JSON.parse(imagens).image_intro;
  const imageURL = `https://agenciadenoticias.ibge.gov.br/${convertedImage}`  
  return(
    <section>
      <div>
        <img src={imageURL} alt="" />
      </div>
      <div>
        <h4>Notícia mais recente</h4>
        <h1>{titulo}</h1>
        <p>{introducao}</p>
        <p>{calculateDays(data_publicacao)}</p>
      </div>
    </section>
  )
}

export default Cover;