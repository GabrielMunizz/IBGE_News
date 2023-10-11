import { useState } from 'react';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const {data, isLoading, error} = useFetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100')
  console.log(data);
  return (
    <h1>Home</h1>
  )
}

export default Home;