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
  margin-top: 1.5rem;
`;
