import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 1440px;
  height: 100vh;
  padding: 20px 160px;
`;

export const Header = styled.div`
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
  }
`;

export const Body = styled.div`
  display: flex;
  height: 100%;
`;

export const DivDescriptions = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  div {
    width: 329px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 80px;
      line-height: 74px;
      font-family: 'Barlow';
      font-weight: 600;
    }

    p {
      font-size: 20px;
      line-height: 30px;
      font-weight: 400;
      color: #617480;
      margin-top: 40px;
    }

    button {
      width: 100%;
      height: 72px;
      margin-top: 40px;
      background: #f25d27;
      border: 0;
      border-radius: 10px;
      font-family: 'Heebo';
      color: #fff;
      font-weight: 500;
      font-size: 18px;
    }
  }
`;

export const DivCards = styled.div`
  flex: 1;
  display: flex;

  .divCards {
    width: 304px;

    .card {
      width: 100%;
      height: 300px;
      position: relative;

      img {
        width: 100%;
        border-radius: 20px 20px 0 0;
      }

      .descriptionCard {
        width: 100%;
        height: 106px;
        background: #fff;
        border: 1px solid #dce2e6;
        border-radius: 0 0 20px 20px;
        position: absolute;
        left: 0;
        right: 0;
        top: 72%;
        bottom: 0;
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
        margin-top: 70px;
      }
    }
  }

  #leftDivCards {
    margin-top: 10px;
  }

  #rightDivCards {
    margin-top: 100px;
    margin-left: 32px;
  }
`;

export const Footer = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
