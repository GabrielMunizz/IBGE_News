import useFetch from '../hooks/useFetch';
import Cover from './Cover';
import Loading from './Loading';
import NewsCard from './NewsCard';

const Home = () => {
  const {data, isLoading, error} = useFetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100')
  const items = data?.items;
  const otherNews = items?.filter((_item, i) => i !== 0);  
  return (
    <main>
      <h1>Home</h1>
      { isLoading && <Loading /> }
      { error && <h1>Um erro inesperado ocorreu...</h1> }
      { !isLoading && <Cover news={ items[0] } /> }
      { !isLoading && otherNews.map((news) => <NewsCard key={ news.id } news={ news }/>) }
    </main>
  )
}

export default Home;