import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.header};
  color: #fff;
  width: 100%;

  & img {
    width: 100px;
    height: 100px;
  }

  & h1 {
    font-family: 'Poller One', serif;
  }

  & button {
    background-color: transparent;
    border: none; 
    color: #fff;
    font-size: 30px;
    margin-right: 20px;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #filterBar {
    width: 70%;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.filterBarBG};
    margin-bottom: 20px;
  }

  #filterContainer, #filterBar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    
  }

  #filterContainer button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.text};
    font-size: 22px;    
    margin: 0.5rem;
    width: 200px;

    &:hover {
      cursor: pointer;
    }

    &:focus,
    &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  } 
  }    
`;

export const Alingner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;  
  width: 100%;
  min-height: 30vh;
`;

export const NewsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  flex-wrap: wrap;  
  
  #noFav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: Poppins;
  }
`;

export const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.filterBarBG};
  margin: 2.4rem;
  padding: 1.2rem;
  border-radius: 5px;
  width: 500px;
  height: 300px;
  box-shadow: 1px 0.5px 2px 0.5px #333;

  & h1 {
    font-family: 'IBM Plex Serif', serif;
    font-size: 20px;
  }

  & button {
    background-color: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;    
    width: 150px;
    background-color: #05D465;
    color: #000;
    text-decoration: none;
    height: 30px;
    font-family: Poppins;
    font-size: 13px;
    transition: 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Sub = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1.5rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 1.5rem;
`;
