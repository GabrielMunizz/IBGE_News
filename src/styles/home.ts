import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.header};
  color: #fff;
  width: 100%;
  margin-bottom: 5rem;
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
    width: 58%;
    height: 67px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.filterBarBG};
    margin-bottom: 20px;    
  }

  #filterBar button {
    margin-right: 10px;
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
    font-size: 18px;
    font-family: Poppins;       
    font-weight: 600;      
    margin: 3rem;    

    &:hover {
      cursor: pointer;
    }

    &:focus, &:hover {
      border-bottom: 1px solid crimson;      
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
  width: 68%;
  flex-wrap: wrap;
  transform: translateX(5.5%);
  
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
  margin: 1.9rem;
  padding: 1.2rem;
  border-radius: 5px;
  width: 438px;
  height: 338px;
  box-shadow: 0px 0px 1.5px 0px ${(props) => props.theme.colors.text};

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

export const MoreNLessBtn = styled.button`
  background-color: transparent;
  text-align: center;
  width: 220px;
  height: 60px;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin-bottom: 5rem;
  color: crimson;;
  border: 0.5px solid crimson;
  line-height: 15px;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
