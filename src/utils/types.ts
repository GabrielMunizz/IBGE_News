export type IBGEApi = {
  count: number;
  items: IBGENews[];
  page: number;
  previousPage: number;
  showingFrom: number;
  showingTo: number;
  totalPages: number;
};

export type IBGENews = {
  data_publicacao: string;
  destaque: boolean;
  editorias: string;
  id: number;
  imagens: string;
  introducao: string;
  link: string;
  produto_id: number;
  produtos: string;
  tipo: string;
  titulo: string;
};

export type FetchAction =
  | { type: 'loading' }
  | { type: 'error'; payload: any }
  | { type: 'fetched'; payload: any };

export type NewsProps = {
  news: IBGENews;
};

export type CategoriesAction = {
  type: 'favorites';
  payload: IBGENews[];
};
