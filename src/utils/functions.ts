import { IBGENews } from './types';

export const calculateDays = (date: string) => {
  // date format: ex.: '23/10/2023'
  // formato da data: ex.: '23/10/2023'

  const monthsWithThirtyDays = [4, 6, 9, 11];

  const givenDay = Number(date.slice(0, 2));
  const givenMonth = Number(date.slice(3, 5));
  const givenYear = Number(date.slice(8, 10));

  // Leap year = ano bissexto;
  const isFebruary = givenMonth === 2;
  const isLeapYear = givenYear % 4 === 0 && givenYear !== 0;

  const rawDate = new Date();
  const day = rawDate.getUTCDate();

  if (givenDay > day) {
    const daysUntilFirst = 31 - givenDay;
    if (monthsWithThirtyDays.includes(givenMonth)) {
      return `${daysUntilFirst - 1 + day} dias atrás.`;
    } if (isLeapYear) {
      return `${29 - givenDay + day} dias atrás`;
    } if (isFebruary) {
      return `${28 - givenDay + day} dias atrás`;
    }
    return `${daysUntilFirst + day} dias atrás.`;
  }
  return `${day - givenDay} dias atrás.`;
};

export const filterData = (items: IBGENews[]) => {
  const recentNews = items?.filter((_item, i) => i !== 0);
  const filterRelease = recentNews?.filter((news) => news.tipo === 'Release');
  const filterNews = recentNews?.filter((news) => news.tipo === 'Notícia');
  const getFavorites = localStorage
    .getItem('favorite') ? JSON.parse(localStorage
      .getItem('favorite') as string) : [];

  return {
    recentNews,
    filterRelease,
    filterNews,
    filterFavorite: getFavorites,
  };
};
