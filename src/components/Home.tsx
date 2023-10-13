import useFetch from '../hooks/useFetch';
import Cover from './Cover';
import Loading from './Loading';
import NewsCard from './NewsCard';
import useCategories from '../hooks/useCategories';

const Home = () => {
  const {
    data,
    isLoading,
    error
        } = useFetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
  const { dispatch, favorite, recentNews, typeNews, typeRelease } = useCategories();
  const items = data?.items.slice(0, 21);  
  const otherNews = items?.filter((_item, i) => i !== 0);  
  const filterRelease = data?.items?.filter((news) => news.tipo === 'Release');
  const filterNews = data?.items?.filter((news) => news.tipo === 'Notícia');
  const filterFavorite = localStorage
    .getItem('favorite') ? JSON.parse(localStorage.getItem('favorite') as string) : [];  
  return (
    <main>
      <h1>Home</h1>
      {isLoading && <Loading />}
      {error && <h1>Um erro inesperado ocorreu...</h1>}
      {!isLoading && <Cover news={items[0]} />}
      <div>
        <button
          onClick={ () => dispatch({ type: 'recentNews', payload: otherNews }) }
        >
          Mais recentes
        </button>
        <button 
          onClick={ () => dispatch({ type: 'typeRelease', payload: filterRelease }) }
        >
          Release
        </button>
        <button 
          onClick={ () => dispatch({ type: 'typeNews', payload: filterNews })}
        >
          Notícia
        </button>
        <button 
          onClick={ () => dispatch({ type: 'favorites', payload: filterFavorite}) }
        >
          Favoritas
        </button>
      </div>
      {(recentNews.length === 0 && favorite.length === 0 && typeNews.length === 0 && typeRelease.length === 0) && (
        otherNews?.map((news) => <NewsCard key={ news.id } news={ news }/>)
      )}
      {recentNews?.length > 0 && recentNews
        .map((news) => <NewsCard key={ news.id } news={ news }/>)}
      {favorite.length > 0 && favorite
        .map((news) => <NewsCard key={ news.id } news={ news }/>)}
      {typeNews.length > 0 && typeNews
        .map((news) => <NewsCard key={ news.id } news={ news }/>)}
      {typeRelease.length > 0 && typeRelease
        .map((news) => <NewsCard key={ news.id } news={ news }/>)}
    </main>
  );
}

export default Home;