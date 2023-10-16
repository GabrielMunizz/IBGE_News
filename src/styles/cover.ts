import styled from 'styled-components';

export const Cover = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 20px 20px 10rem 20px;

  @media (max-width: 1930px) {
    width: 85%;
  }

  @media (max-width: 1367px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 913px) {
    width: 95%;
  }

  @media (max-width: 541px) {
    margin-bottom: 0;
  }

  & h1 {
    font-family: 'IBM Plex Serif', serif;  
  }

  #imageContainer {
    @media (max-width: 541px) {
     margin-top: -8rem;
    }
  }

  #imageContainer img {
    width: 47.12rem;
    height: 30.31rem;
    box-shadow: 0.5px 0.5px 3px 0.5px #000;

    @media (max-width: 1367px) {
      width: 40.12rem;
      height: 22.31rem;
    }

    @media (max-width: 1025px) {
      width: 30.12rem;
      height: 14.31rem;
    }

    @media (max-width: 913px) {
      width: 26.12rem;
      height: 14.31rem;
    }

    @media (max-width: 541px) {
      width: 16.12rem;
      height: 8.31rem;
    }
  }

  #recent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: 1025px) {
      margin-bottom: 8px;
    }
  }

  #recent h4 {
    font-size: 20px;
    color: crimson;
    font-family: Poppins;

    @media (max-width: 1025px) {
      font-size: 15px;
    }

    @media (max-width: 541px) {
      font-size: 12px;
    }
  }

  #recent button {
    background-color: transparent;
    border: none;    
  }

  #recent button img {
    @media (max-width: 1025px) {
      width: 15px;
    }

    @media (max-width: 541px) {
      width: 15px;
    }
  }

  #newsContainer {
    width: 37%;
    height: 18.75rem;
    margin-left: 2.8rem;
    padding: 20px;

    @media (max-width: 1930px) {
      width: 100%;
      margin-left: 5.8rem;
    }

    @media (max-width: 1367px) {
      padding: 0;
      margin-top: -3rem;
    }

    @media (max-width: 1025px) {
      margin-left: 2.8rem;
    }

    @media (max-width: 541px) {
      margin-left: 1.5rem;      
    }
  }

  #newsInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 300px;

    @media (max-width: 1025px) {
      h1 {
        font-size: 20px;
        margin-bottom: -20px;
      }

      p {
        font-size: 15px;        
      }
    }
    
    @media (max-width: 913px) {
    height: 250px;
      
    h1 {
      font-size: 18px;
    }

    @media (max-width: 769px) {
      height: 300px;
    }

    @media (max-width: 541px) {
      height: 250px;

      h1 {
        font-size: 16px;
      }

      p {
        font-size: 12px;
      }
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
      
      @media (max-width: 541px) {
        width: 130px;
        font-size: 12px;
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
