import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const ClientFilter = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: none;
  align-items: center;
  justify-content: center;
  background: rgba(49, 46, 56, 0.9);
  z-index: 1;
`;

export const ContentFilter = styled.div`
  position: absolute;
  width: 400px;
  height: 600px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #312e38;
  z-index: 1000;
  border-radius: 3px;
  box-shadow: 0 0 7px ${shade(0.2, '#ff9000')};
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  h1 {
    flex: 1;
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  button {
    background-color: transparent;
    border: 0;

    svg {
      color: ${shade(0, '#ff0000')};
      transition: color 0.2s;

      :hover {
        color: ${shade(0.2, '#ff0000')};
      }
    }
  }
`;

export const Body = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  label {
    margin-top: 1rem;
  }

  div {
    margin-top: 0.5rem;
    border: 1px solid #ff9000;
    border-radius: 5px;
    padding: 1rem;

    input {
      width: 100%;
      border: 0;
      background: transparent;
      color: #ff9000;
    }

    select {
      width: 100%;
      height: 2.4rem;
      font-size: 1.6rem;
      border: 0;
      background: transparent;
      color: #ff9000;
    }
  }

  #divInputExpirationDate,
  #divInputDateContract {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    border: 0;
    margin: 0;

    label {
      width: 49%;
    }
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 4.7rem;
  margin-top: 1.5rem;
  border-radius: 5px;
  border: none;
  background: #ff9000;
  color: #312e38;
  font-size: 1.6rem;
  font-weight: 500;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 620px;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fafafa;

  table,
  th,
  td {
    border: 1px solid ${shade(0.4, '#ff9000')};
    border-collapse: collapse;
  }

  @media (max-width: 320px) {
    padding-top: 2.7rem;
  }

  @media (min-width: 321px) {
    padding-top: 2.7rem;
  }

  @media (min-width: 401px) {
    padding-top: 2.4rem;
  }

  @media (min-width: 471px) {
    padding-top: 2.5rem;
  }

  @media (min-width: 571px) {
    padding-top: 2.3rem;
  }

  @media (min-width: 671px) {
    padding-top: 2.2rem;
  }

  @media (min-width: 769px) {
    padding-top: 2rem;
  }

  @media (min-width: 1025px) {
    max-width: 1440px;
  }
`;

export const DivFilter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  h2 {
    text-align: center;
    flex: 1;
  }

  button {
    color: #fafafa;
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;

    :hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Table = styled.table`
  flex: 1;
  width: 100%;
  margin-top: 1.5rem;

  th {
    height: 5rem;
    color: ${shade(0, '#ff9000')};
    font-size: 1.8rem;
    font-weight: 500;
  }

  td {
    text-align: center;
    height: 3rem;

    button {
      width: 100%;
      height: 100%;
      border: 0;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: #fafafa;
        transition: color 0.2s;
      }

      :hover {
        svg {
          color: #ff9000;
        }
      }
    }
  }
  #tableBody {
    transition: background 0.2s;

    :hover {
      background: ${shade(0.4, '#ff9000')};
    }
  }
`;

export const DivPages = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;

  p {
    margin: 0 1rem;
  }

  button {
    height: 40px;
    width: 40px;
    background-color: transparent;
    border-radius: 50%;
    border: 0px;
    color: #fafafa;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    & + button {
      margin-left: 1rem;
    }

    svg {
      width: 25px;
      height: 25px;
    }

    :disabled {
      opacity: 0.2;
    }

    :hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
