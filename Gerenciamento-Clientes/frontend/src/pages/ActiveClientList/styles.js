import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  table {
    margin-top: 1.5rem;
  }

  table,
  th,
  td {
    border: 1px solid ${shade(0.2, '#ff9000')};
    border-collapse: collapse;
  }

  table {
    width: 90%;

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
        background: ${shade(0.6, '#ff9000')};
      }
    }
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
  height: 4.7rem;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 2rem;
  }

  form {
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
  }
`;

export const SelectDiv = styled.div`
  border: 1px solid #ff9000;
  border-radius: 5px;
  padding: 1rem;

  select {
    font-size: 1.6rem;
    height: 2.4rem;
    border: 0;
    background: transparent;
    color: #ff9000;
  }
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;

  div {
    margin-left: 1.5rem;
    border: 1px solid #ff9000;
    border-radius: 5px;
    padding: 1rem;

    input {
      border: 0;
      background: transparent;
      color: #ff9000;

      &::placeholder {
        color: #fff;
      }
    }
  }

  p {
    font-size: 1.6rem;
    margin-left: 1.5rem;
  }

  button {
    width: 100px;
    height: 4.7rem;
    margin-left: 1.5rem;
    border-radius: 5px;
    border: none;
    background: #ff9000;
    color: #312e38;
    font-size: 1.6rem;
    font-weight: 500;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
