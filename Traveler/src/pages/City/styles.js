import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 100%;
  }
`;

export const Content = styled.div`
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

export const DivDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 16px;
  border: 1px solid green;

  #descriptions {
    width: 500px;
    padding-right: 50px;

    border: 1px solid blue;
  }

  #pointCards {
    display: flex;

    border: 1px solid red;

    .card {
      width: 160px;
      height: 268px;
      background: #fff;
      border: 1px solid #dce2e6;
      border-radius: 20px;

      .divIcon {
        height: 104px;
        padding: 0 30px;
        background: #fff;
        display: flex;
        align-items: center;
        border-radius: 20px 20px 0 0;
        border-bottom: 1px solid #dce2e6;

        svg {
          width: 30px;
          height: 30px;
          color: #f25d27;
        }
      }

      .divDescriptionCard {
        height: 100%;
        padding: 0 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        p {
          font-family: 'Heebo';
          font-size: 16px;
          line-height: 22px;
          color: #617480;
        }

        .numberDescription {
          font-family: 'Barlow';
          font-size: 40px;
          font-weight: 600;
          line-height: 40px;
          color: #123952;
          margin-bottom: 16px;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1152px;
  }
`;
