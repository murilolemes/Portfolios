import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 619px) {
    width: 256px;
  }
`;

export const Header = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;
  border-bottom: 1px solid #dce2e6;
  display: flex;
  align-items: center;
  justify-content: center;

  #contentHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    div {
      padding: 18px;
      background: #f5f9fa;
      border: 1px solid #dce2e6;
      border-radius: 10px;
      display: flex;
      align-items: center;
      flex-direction: row;

      svg {
        color: #a0acb3;
        background: #f5f9fa;
      }

      input {
        width: 100%;
        margin-left: 20px;
        font-family: 'Heebo';
        font-style: normal;
        line-height: 26px;
        color: #a0acb3;
        border: 0;
        background: #f5f9fa;

        ::placeholder {
          color: #a0acb3;
        }
      }
    }

    button {
      height: 100%;
      background: #dde9f0;
      border: 0;
      border-radius: 10px;
      color: #115d8c;
      font-weight: 500;
    }
  }

  @media (max-width: 375px) {
    #contentHeader {
      width: 100%;

      img {
        order: 1;
        width: 120px;
      }

      div {
        order: 3;
        width: 100%;
        height: 40px;
        margin-top: 10px;

        svg {
          width: 18px;
          height: 18px;
        }

        input {
          font-size: 14px;
        }
      }

      button {
        order: 2;
        height: 40px;
        width: 120px;
        font-size: 12px;
      }
    }
  }

  @media (min-width: 376px) {
    #contentHeader {
      width: 100%;

      img {
        order: 1;
        width: 140px;
      }

      div {
        order: 3;
        width: 100%;
        height: 48px;
        margin-top: 10px;

        svg {
          width: 20px;
          height: 20px;
        }

        input {
          font-size: 16px;
        }
      }

      button {
        order: 2;
        width: 140px;
        height: 48px;
        font-size: 13px;
      }
    }
  }

  @media (min-width: 500px) {
    #contentHeader {
      button {
        width: 174px;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 900px) {
    #contentHeader {
      img {
        order: 1;
        width: 156px;
      }

      div {
        order: 2;
        width: 416px;
        height: 48px;
        margin-top: 0;

        svg {
          width: 20px;
          height: 20px;
        }

        input {
          font-size: 16px;
        }
      }

      button {
        order: 3;
        width: 174px;
        height: 48px;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 1200px) {
    #contentHeader {
      width: 1152px;
      padding: 0 16px;
    }
  }
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 620px) {
    width: 578px;
  }

  @media (min-width: 900px) {
    width: 864px;
  }

  @media (min-width: 1200px) {
    width: 1152px;
  }
`;

export const DivSelectCity = styled.div`
  display: flex;

  h2 {
    color: #123952;
    font-family: 'Barlow';
    font-weight: 600;
    line-height: 46px;
  }

  ul {
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    li {
      height: 100%;
      font-family: 'Roboto';
      font-weight: 500;
      line-height: 26px;
      padding: 0 8px;
      list-style-type: none;
      color: #a0acb3;
      border-bottom: 2px solid #dce2e6;
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        width: 15px;
        height: 15px;
        color: #f25d27;
      }
    }

    li:first-child {
      color: #123952;
      border-color: #f25d27;
    }
  }

  @media (max-width: 375px) {
    align-items: center;
    flex-direction: column;

    h2 {
      font-size: 22px;
    }

    ul {
      li {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 376px) {
    align-items: center;
    flex-direction: column;

    h2 {
      font-size: 22px;
    }

    ul {
      li {
        font-size: 14px;
      }
    }
  }

  @media (min-width: 620px) {
    align-items: center;
    flex-direction: column;

    h2 {
      font-size: 26px;
    }

    ul {
      li {
        font-size: 16px;
      }
    }
  }

  @media (min-width: 900px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 16px;

    h2 {
      font-size: 36px;
    }

    ul {
      li {
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export const DivCards = styled.div`
  display: flex;

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

  @media (max-width: 619px) {
    flex-direction: column;

    .card {
      margin: 16px 0;
    }
  }

  @media (min-width: 620px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
