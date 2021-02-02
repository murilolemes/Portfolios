import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 320px) {
    padding: 20px;
  }

  @media (min-width: 321px) {
    padding: 20px;
  }

  @media (min-width: 321px) {
    padding: 20px 40px;
  }

  @media (min-width: 501px) {
    padding: 20px 50px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 320px) {
    width: 100%;
  }

  @media (min-width: 321px) {
    width: 100%;
  }

  @media (min-width: 769px) {
    width: 600px;
  }

  @media (min-width: 1025px) {
    width: 1000px;
  }

  @media (min-width: 1201px) {
    width: 1100px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 174px;
    height: 100%;
    background: #dde9f0;
    border: 0;
    border-radius: 10px;
    color: #115d8c;
    font-weight: 500;
  }

  @media (max-width: 320px) {
    height: 40px;

    img {
      width: 110px;
    }

    button {
      width: 110px;
      font-size: 12px;
    }
  }

  @media (min-width: 321px) {
    height: 40px;

    img {
      width: 110px;
    }

    button {
      width: 110px;
      font-size: 12px;
    }
  }

  @media (min-width: 425px) {
    height: 44px;

    img {
      width: 136px;
    }

    button {
      width: 154px;
      font-size: 14px;
    }
  }

  @media (min-width: 769px) {
    height: 48px;

    img {
      width: 156px;
    }

    button {
      width: 174px;
      font-size: 16px;
    }
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 320px) {
    flex-direction: column;
  }

  @media (min-width: 321px) {
    flex-direction: column;
  }

  @media (min-width: 1025px) {
    flex-direction: row;
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

    button {
      width: 100%;
      margin-top: 40px;
      background: #f25d27;
      border: 0;
      border-radius: 10px;
      font-family: 'Heebo';
      color: #fff;
      font-weight: 500;
    }
  }

  @media (max-width: 320px) {
    div {
      width: 100%;

      h1 {
        font-size: 65px;
        margin-top: 20px;
      }

      p {
        font-size: 17px;
      }

      button {
        height: 65px;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 321px) {
    div {
      width: 100%;

      h1 {
        font-size: 70px;
        margin-top: 20px;
      }

      p {
        font-size: 17px;
      }

      button {
        height: 65px;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 375px) {
    div {
      width: 100%;

      h1 {
        font-size: 80px;
        margin-top: 20px;
      }

      p {
        font-size: 20px;
      }

      button {
        height: 65px;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 769px) {
    div {
      width: 500px;
      padding-right: 20px;

      h1 {
        font-size: 80px;
        margin-top: 20px;
      }

      p {
        font-size: 20px;
      }

      button {
        height: 72px;
        font-size: 18px;
      }
    }
  }

  @media (min-width: 1025px) {
    div {
      width: 450px;
      padding-right: 20px;
    }
  }

  @media (min-width: 1201px) {
    div {
      width: 500px;
      padding-right: 20px;
    }
  }
`;

export const DivCards = styled.div`
  flex: 1;
  display: flex;

  .divCards {
    .card {
      display: flex;
      flex-direction: column;

      img {
        height: 215px;
        border-radius: 20px 20px 0 0;
      }

      .descriptionCard {
        height: 106px;
        background: #fff;
        border: 1px solid #dce2e6;
        border-radius: 0 0 20px 20px;
        padding: 26px;

        h3 {
          font-family: 'Barlow';
          font-size: 22px;
          line-height: 23px;
          font-weight: 600;
        }

        p {
          font-family: 'Roboto';
          font-size: 15px;
          line-height: 25px;
          color: #617480;
        }
      }

      & + div {
        margin-top: 24px;
      }
    }
  }

  @media (max-width: 320px) {
    flex-direction: column;

    .divCards {
      width: 100%;

      .card {
        img {
          width: 100%;
        }
      }
    }

    #leftDivCards {
      margin-top: 40px;
    }

    #rightDivCards {
      margin-top: 24px;
      margin-left: 0;
    }
  }

  @media (min-width: 321px) {
    flex-direction: column;
    width: 100%;

    .divCards {
      width: 100%;

      .card {
        img {
          width: 100%;
        }
      }
    }

    #leftDivCards {
      margin-top: 40px;
    }

    #rightDivCards {
      margin-top: 24px;
      margin-left: 0;
    }
  }

  @media (min-width: 425px) {
    width: 100%;
    flex-direction: column;
    align-items: center;

    .divCards {
      width: 344px;

      .card {
        img {
          width: 100%;
        }
      }
    }

    #leftDivCards {
      margin-top: 40px;
    }

    #rightDivCards {
      margin-top: 24px;
      margin-left: 0;
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 50px;

    .divCards {
      width: 100%;

      .card {
        img {
          height: 165px;
        }
      }
    }

    #leftDivCards {
      margin-top: 0;
    }

    #rightDivCards {
      margin-left: 32px;
      margin-top: 70px;
    }
  }

  @media (min-width: 1025px) {
    max-width: 600px;
    margin-top: 0;
  }
`;
