import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.header};
  color: #fff;
  width: 100%;
  height: 13rem;
  margin-bottom: 5rem;
  padding-right: 15px;

  & img {
    width: 13rem;
    height: 13rem;

    @media (max-width: 1367px) {
      width: 8rem;
      height: 8rem;
    }

    @media (max-width: 913px) {
      width: 5rem;
      height: 5rem;
    }
  }

  & h1 {
    font-size: 3rem;
    font-family: 'Poller One', serif;
  }

  & button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1.8rem;
    margin-right: 20px;
  }

  @media (max-width: 1367px) {
    height: 8rem;
  }

  @media (max-width: 913px) {
    height: 5rem;

    h1 {
      font-size: 22px;
    }
  }
  @media (max-width: 300px) {
    padding: none;

    h1 {
      margin-left: 30px;
    }
  }
`;
