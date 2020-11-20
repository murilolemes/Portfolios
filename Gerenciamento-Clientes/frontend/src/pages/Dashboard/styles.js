import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;

  #title {
    display: flex;
    align-items: flex-start;
  }

  .tables {
    display: flex;
    flex: 1;

    & + .tables {
      margin-top: 8px;
    }

    div {
      padding: 10px;
      box-shadow: 0 0 5px ${shade(0.2, '#ff9000')};

      & + div {
        margin-left: 10px;
      }

      .divButton {
        box-shadow: none;
        margin-left: 0;
        text-align: right;
      }
    }

    .activeClients {
      flex: 1;
    }

    .inativeCustomers {
      flex: 1;
    }

    .serversList {
      flex: 1;
    }

    .plansList {
      flex: 1;
    }
  }

  @media (max-width: 720px) {
    display: flex;
    align-items: center;

    #title {
      width: 300px;

      h1 {
        font-size: 2.5rem;
      }
    }

    .tables {
      display: flex;
      flex-direction: column;
      width: 100%;

      & + .tables {
        margin-top: 13px;
      }

      div {
        padding: 10px;
        box-shadow: 0 0 5px ${shade(0.2, '#ff9000')};

        & + div {
          margin: 0;
          margin-top: 13px;
        }
      }

      .activeClients {
        flex: 1;
      }

      .inativeCustomers {
        flex: 1;
      }

      .serversList {
        flex: 1;
      }

      .plansList {
        flex: 1;
      }
    }
  }
`;

export const Title = styled.h1`
  flex: 1;
  margin-bottom: 20px;
  text-shadow: 0 2px 2px ${shade(0.2, '#ff9000')};
`;

export const DivCards = styled.div`
  padding: 10px;
  flex: 1;
`;

export const DivGraphics = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;

    & + div {
      margin-left: 15px;
    }
  }
`;
