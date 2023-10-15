import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string,
      filterBarBG: string,
      text: string,
      title: string,
      header: string,
    }
  }
}
