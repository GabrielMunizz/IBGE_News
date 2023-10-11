import { NewsProps } from '../types';

const Cover = ({ news }: NewsProps) => {
  const { titulo, introducao, imagens } = news
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
      </div>
    </section>
  )
}

export default Cover;