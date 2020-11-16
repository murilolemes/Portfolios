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

export const ActiveClient = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InativeCustomers = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServersList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlansList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivTable = styled.div`
  flex: 1;
  box-shadow: none !important;

  table {
    border-collapse: collapse;
    width: 100%;

    th,
    tr,
    td {
      box-shadow: 0 0 1px ${shade(0.2, '#ff9000')};
    }

    th {
      height: 40px;
      color: ${shade(0.2, '#ff9000')};
    }

    tr {
      td {
        height: 30px;

        button {
          border: 0;
          background: transparent;
          color: #fafafa;
        }

        svg {
          width: 1.4rem;
          height: 1.8rem;
        }
      }

      &:hover {
        color: ${shade(0.2, '#ff9000')};

        button {
          color: ${shade(0.2, '#ff9000')};
        }
      }
    }
  }
`;

export const DivButton = styled.div`
  button {
    border: 0;
    background: transparent;
    color: #fafafa;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;
