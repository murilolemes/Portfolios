import styled from 'styled-components';

import imgAvatar from '../../assets/foto_avatar.jpg';

export const Container = styled.div`
  padding: 50px 200px 20px 200px;

  p {
    color: #32264d;
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    color: #32264d;
    font-size: 1.5rem;
  }

  @media (max-width: 450px) {
    padding: 20px 10px;
  }

  @media (min-width: 1440px) {
    .classContent {
      max-width: 750px;
    }
  }

  @media (min-width: 1600px) {
    margin: 0 auto;
    max-width: 1600px;

    .classContent {
      max-width: 1000px;
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

  @media (max-width: 450px) {
    flex-direction: column-reverse;
  }
`;

export const Title = styled.div`
  font-size: 3.2rem;
  text-align: center;
  padding-bottom: 25px;
  border-bottom: 1px solid #e6e6f0;

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }

  @media (max-width: 450px) {
    font-size: 1.4rem;
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

  @media (max-width: 450px) {
    border-top: 1px solid #e6e6f0;
    border-bottom: 1px solid #e6e6f0;

    h2 {
      font-size: 2.4rem;
      text-align: center;
    }

    p {
      font-size: 1.5rem;
      text-align: justify;
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

  @media (max-width: 450px) {
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

  @media (max-width: 450px) {
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

  @media (max-width: 450px) {
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

  @media (max-width: 450px) {
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

  @media (max-width: 450px) {
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
`;

export const Objective = styled.div.attrs({
  className: 'classContent',
})`
  padding: 10px 0 25px 0;

  p {
    margin-top: 10px;
    line-height: 25px;
  }

  @media (max-width: 450px) {
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

  @media (max-width: 450px) {
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
