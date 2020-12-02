import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

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

export const Title = styled.h1`
  text-align: center;
  text-shadow: 0 2px 2px ${shade(0.2, '#ff9000')};

  @media (max-width: 320px) {
    width: 75%;
    margin-left: 2rem;
    font-size: 1.8rem;
  }

  @media (min-width: 321px) {
    width: 80%;
    margin-left: 2.1rem;
    font-size: 2.1rem;
  }

  @media (min-width: 376px) {
    width: 75%;
    font-size: 2.2rem;
  }

  @media (min-width: 401px) {
    font-size: 2.4rem;
  }

  @media (min-width: 471px) {
    font-size: 2.6rem;
  }

  @media (min-width: 571px) {
    font-size: 2.8rem;
  }

  @media (min-width: 671px) {
    font-size: 3rem;
    margin-left: 0;
  }

  @media (min-width: 769px) {
    font-size: 3.2rem;
    margin-bottom: 1rem;
  }
`;
