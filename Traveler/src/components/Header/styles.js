import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  padding: 20px;
  background: #fff;
  border-bottom: 1px solid #dce2e6;
  display: flex;
  align-items: center;
  justify-content: center;

  #headerContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    #buttonBack {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border: 1px solid #dce2e6;
      border-radius: 10px;

      svg {
        color: #a0acb3;
      }
    }

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

    h2 {
      font-family: 'Barlow';
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #a0acb3;
      width: 170px;
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
    #headerContent {
      width: 100%;

      img {
        order: 1;
        width: 120px;
      }

      #buttonBack {
        order: 4;
        height: 40px;
        width: 40px;
        margin-top: 10px;
      }

      h2 {
        order: 3;
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
    #headerContent {
      width: 100%;

      img {
        order: 1;
        width: 140px;
      }

      #buttonBack {
        order: 4;
        height: 40px;
        width: 40px;
        margin-top: 10px;
      }

      h2 {
        order: 3;
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
    #headerContent {
      #buttonBack {
        order: 4;
        height: 48px;
        width: 48px;
        margin-top: 10px;
      }

      h2 {
        width: 90%;
        margin-top: 10px;
      }

      button {
        width: 174px;
        font-size: 16px;
      }
    }
  }

  @media (min-width: 900px) {
    #headerContent {
      img {
        order: 1;
        width: 156px;
      }

      #buttonBack {
        order: 2;
        margin-top: 0;
      }

      h2 {
        width: 400px;
        margin-top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
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
    #headerContent {
      width: 1152px;
      padding: 0 16px;

      h2 {
        width: 650px;
      }
    }
  }
`;
