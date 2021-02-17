import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Body = styled.div`
  height: 100%;
  display: flex;

  @media (max-width: 320px) {
    width: 256px;
    flex-direction: column;
  }

  @media (min-width: 321px) {
    width: 256px;
    flex-direction: column;
  }

  @media (min-width: 620px) {
    width: 578px;
  }

  @media (min-width: 1024px) {
    width: 1000px;
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    width: 1152px;
  }
`;

export const DivDescriptions = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      line-height: 74px;
      font-family: 'Barlow';
      font-weight: 600;
    }

    p {
      line-height: 30px;
      font-weight: 400;
      color: #617480;
      margin-top: 40px;
    }

    a {
      width: 100%;
      margin-top: 40px;
      background: #f25d27;
      border: 0;
      border-radius: 10px;
      font-family: 'Heebo';
      color: #fff;
      font-weight: 500;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: 320px) {
    div {
      width: 100%;

      h1 {
        font-size: 64px;
        margin-top: 20px;
      }

      p {
        font-size: 17px;
      }

      a {
        height: 65px;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 321px) {
    div {
      width: 100%;

      h1 {
        font-size: 64px;
        margin-top: 20px;
      }

      p {
        font-size: 17px;
      }

      a {
        height: 65px;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 375px) {
    div {
      width: 100%;

      h1 {
        font-size: 64px;
        margin-top: 20px;
      }

      p {
        font-size: 20px;
      }

      a {
        height: 65px;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 620px) {
    padding: 0 16px;
    div {
      h1 {
        font-size: 84px;
        margin-top: 20px;
      }

      p {
        font-size: 20px;
      }

      a {
        height: 72px;
        font-size: 18px;
      }
    }
  }

  @media (min-width: 1024px) {
    div {
      width: 392px;
      margin-top: 50px;
    }
  }

  @media (min-width: 1200px) {
    width: 1118px;
    display: flex;
    justify-content: center;

    div {
      width: 330px;
    }
  }
`;
