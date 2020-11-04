import styled from 'styled-components';

import imgAvatar from '../../assets/foto_avatar.jpg';

export const Container = styled.div`
  padding: 50px 200px 20px 200px;

  .container {
    max-width: 800px;
  }

  p {
    color: #32264d;
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    color: #32264d;
    font-size: 1.5rem;
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
`;

export const Title = styled.div`
  font-size: 32px;
  text-align: center;
  padding-bottom: 25px;
  box-shadow: 0 1px 0 #e6e6f0;
`;

export const AboutMe = styled.div.attrs({
  className: 'container',
})`
  padding: 10px 0 25px 0;
  box-shadow: 0 1px 0 #e6e6f0;

  p {
    margin-top: 10px;
    line-height: 25px;
  }
`;

export const PersonalData = styled.div.attrs({
  className: 'container',
})`
  padding: 10px 0 25px 0;
  box-shadow: 0 1px 0 #e6e6f0;

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
`;

export const Formations = styled.div.attrs({
  className: 'container',
})`
  padding: 10px 0 25px 0;
  box-shadow: 0 1px 0 #e6e6f0;

  p {
    margin-top: 10px;
  }
`;

export const Improvement = styled.div.attrs({
  className: 'container',
})`
  padding: 10px 0 25px 0;
  box-shadow: 0 1px 0 #e6e6f0;

  p {
    margin-top: 10px;
  }
`;

export const Knowledge = styled.div.attrs({
  className: 'container',
})`
  padding: 10px 0 25px 0;
  box-shadow: 0 1px 0 #e6e6f0;

  p {
    margin-top: 10px;
  }
`;

export const ProfessionalExperience = styled.div.attrs({
  className: 'container',
})`
  padding: 10px 0 25px 0;
  box-shadow: 0 1px 0 #e6e6f0;

  h2 {
    margin-bottom: 10px;
  }

  div {
    display: flex;
    margin-top: 5px;
    margin: 10px 0;
  }

  h4 {
    margin-right: 5px;
  }

  p {
    display: flex;
    align-items: center;
  }
`;

export const Objective = styled.div.attrs({
  className: 'container',
})`
  padding: 10px 0 25px 0;

  p {
    margin-top: 10px;
    line-height: 25px;
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
`;

export const Footer = styled.footer`
  padding-top: 15px;
  box-shadow: 0 -1px 0 #e6e6f0;
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
