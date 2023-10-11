import { useState } from 'react';

const Home = () => {
  const [data, setData] = useState();

  const getFetch = async () => {
    const response = fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
    const resolved = (await response).json();
    resolved.then((info) => setData(info));    
  }
  
  console.log(data);
  return (
    <h1>Home</h1>
  )
}

export default Home;