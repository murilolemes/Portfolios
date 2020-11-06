import styled from 'styled-components';

import imgAvatar from '../../assets/foto_avatar.jpg';

export const Container = styled.div`
  p {
    color: #32264d;
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    color: #32264d;
    font-size: 1.5rem;
  }

  @media (max-width: 720px) {
    padding: 30px 20px;
  }

  @media (min-width: 721px) {
    padding: 30px 20px;

    .classContent {
      max-width: 95%;
    }
  }

  @media (min-width: 1060px) {
    max-width: 1060px;
    margin: 0 auto;

    .classContent {
      max-width: 750px;
    }
  }

  @media (min-width: 1441px) {
    max-width: 1440px;
    margin: 0 auto;

    .classContent {
      max-width: 1200px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: stretch;

  #backgroundAvatar {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
  }

  @media (max-width: 720px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 1441px) {
    #backgroundAvatar {
      max-width: 1100px;
    }
  }
`;

export const Title = styled.div`
  text-align: center;
  padding-bottom: 25px;
  border-bottom: 1px solid #e6e6f0;

  @media (max-width: 399px) {
    font-size: 1.2rem;
  }

  @media (min-width: 400px) {
    font-size: 1.4rem;
  }

  @media (min-width: 450px) {
    font-size: 1.6rem;
  }

  @media (min-width: 721px) {
    font-size: 2.8rem;
  }

  @media (min-width: 1025px) {
    font-size: 3rem;
  }

  @media (min-width: 1440px) {
    font-size: 3.2rem;
  }
`;

export const AboutMe = styled.div.attrs({
  className: 'classContent',
})`
  padding: 10px 0 25px 0;
  border-bottom: 1px solid #e6e6f0;

  p {
    margin-top: 10px;
    line-height: 25px;
  }

  @media (max-width: 499px) {
    border-top: 1px solid #e6e6f0;

    h2 {
      font-size: 2.4rem;
      text-align: center;
    }

    p {
      font-size: 1.5rem;
      text-align: justify;
    }
  }

  @media (min-width: 500px) {
    border-top: 1px solid #e6e6f0;

    h2 {
      font-size: 2.4rem;
      text-align: initial;
    }

    p {
      font-size: 1.6rem;
      text-align: justify;
    }
  }

  @media (min-width: 1025px) {
    h2 {
      font-size: 2.6rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;

export const PersonalData = styled.div.attrs({
  className: 'classContent',
})`
  padding: 10px 0 25px 0;
  border-bottom: 1px solid #e6e6f0;

  div {
    display: flex;
    margin-top: 10px;
  }

  h4 {
    margin-right: 5px;
  }

  a {
    display: flex;
    align-items: center;
  }

  p {
    display: flex;
    align-items: center;
  }

  @media (max-width: 499px) {
    h2 {
      font-size: 2.4rem;
      text-align: center;
    }

    div {
      display: block;
      text-align: center;
    }

    h4 {
      font-size: 1.6rem;
      margin: 0;
    }

    p {
      font-size: 1.5rem;
      text-align: center;
      width: 100%;
      display: block;
      line-height: 25px;
    }

    a {
      font-size: 1.5rem;
      text-align: center;
      width: 100%;
      display: block;
    }
  }

  @media (min-width: 500px) {
    h2 {
      font-size: 2.4rem;
      text-align: initial;
    }

    h4 {
      font-size: 1.7rem;
      margin-right: 5px;
    }

    p {
      font-size: 1.6rem;
    }

    a {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1025px) {
    h2 {
      font-size: 2.6rem;
    }

    h4 {
      font-size: 1.9rem;
    }

    p {
      font-size: 1.8rem;
    }

    a {
      font-size: 1.8rem;
    }
  }
`;

export const Formations = styled.div.attrs({
  className: 'classContent',
})`
  padding: 10px 0 25px 0;
  border-bottom: 1px solid #e6e6f0;

  p {
    margin-top: 10px;
    line-height: 25px;
  }

  @media (max-width: 499px) {
    h2 {
      font-size: 2.4rem;
      text-align: center;
    }

    p {
      font-size: 1.5rem;
      text-align: center;
      width: 100%;
      display: block;
    }
  }

  @media (min-width: 500px) {
    h2 {
      font-size: 2.4rem;
      text-align: initial;
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1025px) {
    h2 {
      font-size: 2.6rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;

export const Improvement = styled.div.attrs({
  className: 'classContent',
})`
  padding: 10px 0 25px 0;
  border-bottom: 1px solid #e6e6f0;

  p {
    margin-top: 10px;
    line-height: 25px;
  }

  @media (max-width: 499px) {
    h2 {
      font-size: 2.4rem;
      text-align: center;
    }

    p {
      font-size: 1.5rem;
      text-align: center;
      width: 100%;
      display: block;
    }
  }

  @media (min-width: 500px) {
    h2 {
      font-size: 2.4rem;
      text-align: initial;
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1025px) {
    h2 {
      font-size: 2.6rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;

export const Knowledge = styled.div.attrs({
  className: 'classContent',
})`
  padding: 10px 0 25px 0;
  border-bottom: 1px solid #e6e6f0;

  p {
    margin-top: 10px;
    line-height: 25px;
  }

  @media (max-width: 499px) {
    h2 {
      font-size: 2.4rem;
      text-align: center;
    }

    p {
      font-size: 1.5rem;
      text-align: center;
      width: 100%;
      display: block;
    }
  }

  @media (min-width: 500px) {
    h2 {
      font-size: 2.4rem;
      text-align: initial;
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1025px) {
    h2 {
      font-size: 2.6rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;

export const ProfessionalExperience = styled.div.attrs({
  className: 'classContent',
})`
  padding: 10px 0 25px 0;
  border-bottom: 1px solid #e6e6f0;

  h2 {
    margin-bottom: 10px;
  }

  div {
    display: flex;
    margin-top: 15px;
  }

  h4 {
    margin-right: 5px;
  }

  p {
    display: flex;
    align-items: center;
  }

  @media (max-width: 499px) {
    h2 {
      font-size: 2.4rem;
      text-align: center;
    }

    p {
      font-size: 1.5rem;
      text-align: center;
      width: 100%;
      display: block;
      line-height: 25px;
    }

    div {
      display: block;
      text-align: center;
    }

    h4 {
      font-size: 1.6rem;
      margin: 0;
    }
  }

  @media (min-width: 500px) {
    h2 {
      font-size: 2.4rem;
      text-align: initial;
    }

    p {
      font-size: 1.6rem;
      line-height: 25px;
    }

    div {
      h4 {
        font-size: 1.7rem;
        margin-right: 5px;
      }

      p {
        line-height: normal;
      }
    }
  }

  @media (min-width: 1025px) {
    h2 {
      font-size: 2.6rem;
    }

    h4 {
      font-size: 1.9rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;

export const Objective = styled.div.attrs({
  className: 'classContent',
})`
  padding: 10px 0 25px 0;

  p {
    margin-top: 10px;
    line-height: 25px;
  }

  @media (max-width: 499px) {
    h2 {
      font-size: 2.4rem;
      text-align: center;
    }

    p {
      font-size: 1.5rem;
      text-align: justify;
      width: 100%;
      display: block;
    }
  }

  @media (min-width: 500px) {
    h2 {
      font-size: 2.4rem;
      text-align: initial;
    }

    p {
      font-size: 1.5rem;
      text-align: justify;
    }
  }

  @media (min-width: 1025px) {
    h2 {
      font-size: 2.6rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;

export const Avatar = styled.div`
  flex: 1;
  background: url(${imgAvatar}) no-repeat;
  max-width: 225px;
  max-height: 225px;
  min-width: 224px;
  min-height: 224px;
  border-radius: 50%;
  margin: 10px 0 30px auto;

  @media (max-width: 720px) {
    margin: 15px auto;
  }
`;

export const Footer = styled.footer`
  padding-top: 15px;
  border-top: 1px solid #e6e6f0;
  text-align: center;

  #links {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 10px;
  }

  div + div {
    margin-left: 10px;
  }

  div {
    height: 30px;
  }

  p {
    margin-top: 10px;
    color: #e2e2e2;
  }
`;
