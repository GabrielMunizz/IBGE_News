import styled from 'styled-components';

export const NewsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.filterBarBG};
  margin: 1.9rem;
  padding: 1.2rem;
  border-radius: 5px;
  width: 28.37rem;
  height: 22.12rem;
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
    background-color: #05d465;
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

  @media (max-width: 1930px) {
    width: 31.37rem;
    height: 22.12rem;
  }

  @media (max-width: 1601px) {
    width: 28.37rem;
    height: 22.12rem;
    transform: translateX(-15%);
  }

  @media (max-width: 1281px) {
    width: 30.37rem;
    height: 22.12rem;
  }

  @media (max-width: 1025px) {
    width: 25.37rem;
    height: 18.12rem;

    h1 {    
    font-size: 16px;
  }

    p {
      font-size: 14px;
    }
  }

  @media (max-width: 913px) {
    transform: none;
    margin: 1rem;
  }

  @media (max-width: 821px) {
    width: 20.37rem;
    height: 22.12rem;
  }

  @media (max-width: 541px) {
    width: 40.37rem;
    height: 16.12rem;

    h1 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }

    a {
      font-size: 12px;
      width: 130px;
    }

    button {
      margin-top: -15px;
    }

    button img {
      width: 15px;
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
