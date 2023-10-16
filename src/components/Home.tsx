import { useState, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import Cover from './Cover';
import Loading from './Loading';
import NewsCard from './NewsCard';
import NewsContext from '../context/NewsContext';
import { filterData } from '../utils/functions';
import Header from './Header';
import * as S from '../styles/home';

function Home() {
  const newsContext = useContext(NewsContext);
  const { dispatch, favorite } = newsContext;
  const [selectedBtn, setSelectedBtn] = useState('recentNews');
  const URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';
  const { data, isLoading, error } = useFetch(URL);
  const allTheNews = data?.items.slice(0, 22);
  const items = data?.items.slice(0, 10);
  const { filterFavorite, filterNews, filterRelease, recentNews } = filterData(items);
  return (
    <S.Main>
      <Header />
      {isLoading && <Loading />}
      <section id="errorContent">
        {error && <h1>Um erro inesperado ocorreu...</h1>}
      </section>
      {!isLoading && <Cover news={ items[0] } />}
      <section id="filterBar">
        <div id="filterContainer">
          <button onClick={ () => setSelectedBtn('recentNews') }>
            Mais recentes
          </button>
          <button onClick={ () => setSelectedBtn('typeRelease') }>Release</button>
          <button onClick={ () => setSelectedBtn('typeNews') }>Notícia</button>
          <button
            onClick={ () => {
              dispatch({ type: 'favorites', payload: filterFavorite });
              setSelectedBtn('favorites');
            } }
          >
            Favoritas
          </button>
        </div>
        <button>botão estranho</button>
      </section>
      <S.Alingner>
        <S.NewsContent>
          {selectedBtn === 'recentNews'
            && recentNews?.map((news) => <NewsCard key={ news.id } news={ news } />)}
          {selectedBtn === 'favorites'
            && favorite.map((news) => <NewsCard key={ news.id } news={ news } />)}
          {selectedBtn === 'favorites' && favorite.length === 0 && (
            <div id="noFav">
              <h2>Não possui favoritos</h2>
            </div>
          )}
          {selectedBtn === 'typeNews'
            && filterNews.map((news) => <NewsCard key={ news.id } news={ news } />)}
          {selectedBtn === 'typeRelease'
            && filterRelease.map((news) => <NewsCard key={ news.id } news={ news } />)}
          {selectedBtn === 'allTheNews' && (
            allTheNews.map((news) => <NewsCard key={ news.id } news={ news } />)
          )}
        </S.NewsContent>
      </S.Alingner>
      {selectedBtn !== 'allTheNews' && (
        <S.MoreNLessBtn
          onClick={ () => setSelectedBtn('allTheNews') }
        >
          Mais notícias
        </S.MoreNLessBtn>
      )}
      {selectedBtn === 'allTheNews' && (
        <S.MoreNLessBtn
          onClick={ () => setSelectedBtn('recentNews') }
        >
          Menos notícias
        </S.MoreNLessBtn>
      )}
    </S.Main>
  );
}

export default Home;
