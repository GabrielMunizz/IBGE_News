export type IBGE_Api = {
  count: number,
  items: IBGE_News[],
  page: number,
  previousPage: number,
  showingFrom: number,
  showingTo: number,
  totalPages: number,
}

export type IBGE_News = {
  data_publicacao: string,
  destaque: boolean,
  editorias: string,
  id: number,
  imagens: string,
  introducao: string,
  link: string,
  produto_id: number,
  produtos: string,
  tipo: string,
  titulo: string,
}

export type FetchAction = 
  | { type: 'loading' }
  | { type: 'error', payload: any }
  | {type: 'fetched', payload: any}

export type NewsProps = {
  news: IBGE_News,  
}

export type CategoriesAction = 
  | { type: 'favorites', payload: IBGE_News[] }  
  | { type: 'recentNews', payload: IBGE_News[] }
  | { type: 'typeNews', payload: IBGE_News[] }
  | { type: 'typeRelease', payload: IBGE_News []}