import useFetch from '../hooks/useFetch';
import Cover from './Cover';
import Loading from './Loading';
import NewsCard from './NewsCard';
import { useState } from 'react';
import { useContext } from 'react';
import NewsContext from '../context/NewsContext';
import { filterData } from '../utils/functions';

const Home = () => {
  const [selectedBtn, setSelectedBtn] = useState('recentNews');
  const URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100'
  const { data, isLoading, error } = useFetch(URL);
  const newsContext = useContext(NewsContext);
  const { dispatch, favorite } = newsContext;  
  const items = data?.items.slice(0, 21);
  const { filterFavorite, filterNews, filterRelease, recentNews } = filterData(items);  
  return (
    <main>
      <h1>Home</h1>
      {isLoading && <Loading />}
      {error && <h1>Um erro inesperado ocorreu...</h1>}
      {!isLoading && <Cover news={items[0]} />}
      <div>
        <button
          onClick={ () => {            
            setSelectedBtn('recentNews');
          } }
        >
          Mais recentes
        </button>
        <button 
          onClick={ () => {           
            setSelectedBtn('typeRelease');
          } }
        >
          Release
        </button>
        <button 
          onClick={ () => {            
            setSelectedBtn('typeNews');
          } }
        >
          Notícia
        </button>
        <button 
          onClick={ () => {
            dispatch({ type: 'favorites', payload: filterFavorite })          
            setSelectedBtn('favorites');
          } }
        >
          Favoritas
        </button>
      </div>      
      {selectedBtn === 'recentNews' && recentNews
        ?.map((news) => <NewsCard key={ news.id } news={ news }/>)}
      {selectedBtn === 'favorites' && favorite
        .map((news) => <NewsCard key={ news.id } news={ news } />)}
      {selectedBtn === 'favorites' && favorite
        .length === 0 && <h2>Não possui favoritos</h2>}
      {selectedBtn === 'typeNews' && filterNews
        .map((news) => <NewsCard key={ news.id } news={ news }/>)}
      {selectedBtn === 'typeRelease' && filterRelease
        .map((news) => <NewsCard key={ news.id } news={ news }/>)}
    </main>
  );
}

export default Home;