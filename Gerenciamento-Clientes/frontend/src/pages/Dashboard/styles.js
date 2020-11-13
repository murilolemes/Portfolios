import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Icon = styled.button`
  background: transparent;
  border: 0;
  position: absolute;
  margin-top: 25px;
  margin-left: 15px;
  color: #fafafa;

  &:hover {
    color: ${shade(0.2, '#ff9000')};
  }
`;

export const Menu = styled.div`
  #displayOff {
    display: none;
  }

  #displayOn {
    height: 100%;
    width: 350px;
    box-shadow: 0 -5px 5px ${shade(0.2, '#ff9000')};
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 20px;

  #title {
    display: flex;
    align-items: flex-start;

    button {
      background: transparent;
      border: 0;
      color: #fafafa;
    }
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
`;

export const Title = styled.h1`
  flex: 1;
  margin-bottom: 20px;
  text-shadow: 0 2px 2px ${shade(0.2, '#ff9000')};
`;
