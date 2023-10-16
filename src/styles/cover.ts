import styled from 'styled-components';

export const Cover = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 20px 20px 10rem 20px;

  & h1 {
    font-family: 'IBM Plex Serif', serif;    
  }

  #imageContainer img {
    width: 754px;
    height: 485px;
    box-shadow: 0.5px 0.5px 3px 0.5px #000;
  }

  #recent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  #recent h4 {
    font-size: 20px;
    color: crimson;
    font-family: Poppins;
  }

  #recent button {
    background-color: transparent;
    border: none;
  }

  #newsContainer {
    width: 37%;
    height: 300px;
    margin-left: 2.8rem; 
    padding: 20px;
  }

  #newsInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 300px;    

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

  #btnContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  }
`;
