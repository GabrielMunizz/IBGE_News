import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { renderWithContext } from './utils/renderWith';
import App from '../App';
import mock from './utils/mock';
import { calculateDays } from '../utils/functions';

beforeEach(() => {
  const MOCK_RESPONSE = {
    ok: true,
    status: 200,
    json: async () => mock,
  } as Response;
  vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RESPONSE);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Testes da aplicação:', () => {
  test('Testa para ver se a página possui título', () => {
    render(<App />);
    const pageTitle = screen.getByText('Trybe News');

    expect(pageTitle).toBeInTheDocument();
  });

  test('Testa para ver se é possivel clicar no botão de darkmode', async () => {
    render(<App />);
    const darkmodeBtn = await screen.findByTestId('darkmodeBtn');

    await userEvent.click(darkmodeBtn);

    expect(darkmodeBtn).toBeInTheDocument();
  });

  test('Testa para ver se o fetch é executado com a URL correta', async () => {
    renderWithContext(<App />);

    expect(fetch).toBeCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
  });

  test('Testa para ver se a noticia mais recente é renderizada na tela', async () => {
    renderWithContext(<App />);

    const recentNews = await screen.findByRole('heading', { name: /notícia mais recente/i });
    const recentNewsTitle = await screen.findByRole('heading', { name: /vendas do comércio mantêm estabilidade variando -0,2% em agosto/i });
    const daysAgo = await screen.findAllByText('1 dias atrás.');

    expect(recentNews).toBeInTheDocument();
    expect(recentNewsTitle).toBeInTheDocument();
    expect(daysAgo[0]).toBeInTheDocument();
  });

  test('Testa para ver se é possivel favoritar uma noticia', async () => {
    renderWithContext(<App />);

    const favoriteBtn = await screen.findByTestId('coverFavorite');
    await userEvent.click(favoriteBtn);
  });

  test('Testa para ver se ao clicar no botão de favoritar, a imagem do botão muda ao favoritar e desfavoritar', async () => {
    renderWithContext(<App />);

    const favoriteBtn = await screen.findByTestId('coverFavorite');

    expect(favoriteBtn).toHaveAttribute('src', '/src/images/checked_heart.png');

    await userEvent.click(favoriteBtn);

    expect(favoriteBtn).toHaveAttribute('src', '/src/images/empty_heart.png');

    await userEvent.click(favoriteBtn);
  });

  test('Testa para ver se ao clicar no filtro favoritos, a noticia favoritada aparece', async () => {
    renderWithContext(<App />);

    const favoriteBtn = await screen.findByTestId('coverFavorite');
    await userEvent.click(favoriteBtn);

    const favoriteFilter = await screen.findByRole('button', { name: /favoritas/i });
    await userEvent.click(favoriteFilter);

    const favoriteNewsTitle = await screen.findByRole('heading', { name: /vendas do comércio mantêm estabilidade variando -0,2% em agosto/i });

    expect(favoriteNewsTitle).toBeInTheDocument();
  });

  test('Testa para ver se ao clicar no filtro Release, aparecem as noticias corretas', async () => {
    renderWithContext(<App />);

    const releaseFilter = await screen.findByRole('button', { name: /release/i });
    await userEvent.click(releaseFilter);

    const releaseNewsTitle = await screen.findByRole('heading', { name: /Volume dos Serviços recua 0,9% em agosto/i });

    expect(releaseNewsTitle).toBeInTheDocument();
  });

  test('Testa para ver se ao clicar no filtro Notícia, aparecem as noticias corretas', async () => {
    renderWithContext(<App />);

    const newsFilter = await screen.findAllByRole('button', { name: /notícia/i });
    await userEvent.click(newsFilter[1]);

    const newsTitle = await screen.findByRole('heading', { name: /Serviços recuam 0,9% em agosto, após três altas consecutivas/i });
    const newsTitle2 = await screen.findAllByRole('heading', { name: /Vendas do comércio mantêm estabilidade variando -0,2% em agosto/i });

    expect(newsTitle).toBeInTheDocument();
    expect(newsTitle2[1]).toBeInTheDocument();
  });

  test('Testa para ver se é possivel clicar no botão de lista ou tabela', async () => {
    renderWithContext(<App />);

    const listOrGridBtn = await screen.getByRole('img', { name: /list or grid filter/i });
    await userEvent.click(listOrGridBtn);
  });

  test('Testa a função calculateDays', async () => {
    renderWithContext(<App />);

    const result = calculateDays('20/08/2023');
    const resultWithLastMonth = calculateDays('20/09/2023');
    const resultWithFebruary = calculateDays('20/02/2023');
    const resultWithLeapYear = calculateDays('20/02/2020');

    expect(result).toBe('30 dias atrás.');
    expect(resultWithLastMonth).toBe('29 dias atrás.');
    expect(resultWithFebruary).toBe('27 dias atrás');
    expect(resultWithLeapYear).toBe('28 dias atrás');
  });
});
