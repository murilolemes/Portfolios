import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const DivCards = styled.div`
  display: flex;
  flex-wrap: wrap;

  border: 1px solid red;

  .card {
    width: 256px;
    height: 266px;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 16px;

    img {
      width: 256px;
      height: 200px;
      border-radius: 20px 20px 0 0;
      position: absolute;
    }

    .descriptionCard {
      width: 100%;
      height: 106px;
      background: #fff;
      border: 1px solid #dce2e6;
      border-radius: 0 0 20px 20px;
      padding: 26px;
      margin-top: -16px;
      position: absolute;
      bottom: 0;

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
  }
`;
