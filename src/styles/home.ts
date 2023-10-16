import styled from 'styled-components';

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

  #filterContainer,
  #filterBar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #filterContainer button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.text};
    font-size: 1.1rem;
    font-family: Poppins;
    font-weight: 600;
    margin: 3rem;

    &:hover {
      cursor: pointer;
    }

    &:focus,
    &:hover {
      border-bottom: 1px solid crimson;
    }

    @media (max-width: 913px) {
    font-size: 15px;
    margin: 1.5rem;
  }
  }

  @media (max-width: 2201px) {
    #filterBar {
      width: 85%;
    }
  }

  @media (max-width: 913px) {
    #filterBar {
      width: 95%;
    }
  }

  @media (max-width: 541px) {
    #filterContainer button {
      margin: 0.8rem;
      font-size: 0.8rem;
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
  transform: translateX(5.7%);

  @media (max-width: 1930px) {
    width: 100%;
    margin-left: 8px;
  }

  @media (max-width: 1601px) {
    margin: none;
  }

  @media (max-width: 1367px) {
    width: 89%;
    justify-content: space-between;
  }

  @media (max-width: 1025px) {
    width: 92%;
    transform: translateX(6%);
  }

  @media (max-width: 913px) {
    width: 100%;
    transform: none;
  }

  #noFav {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: Poppins;
  }
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
  color: crimson;
  border: 0.5px solid crimson;
  line-height: 15px;
  transition: 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
