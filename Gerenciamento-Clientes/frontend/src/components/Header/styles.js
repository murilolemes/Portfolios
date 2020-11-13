import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 100px 20px;
`;

export const Content = styled.div`
  .content {
    & + div {
      margin-top: 30px;
    }
  }

  .title {
    button {
      display: flex;
      align-items: center;
      background: transparent;
      border: 0;
      color: #fafafa;

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }
    }

    svg {
      margin-right: 15px;
    }

    h2 {
      font-size: 2rem;
    }
  }

  .list {
    display: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: 0;
  margin-bottom: 40px;
  color: #fafafa;
`;

export const ControlPanel = styled.div`
  .listControlPanel {
    display: flex;
    flex-direction: column;
    padding: 10px 0 0 50px;

    a {
      color: #fafafa;
      text-decoration: none;
      font-size: 1.6rem;

      & + a {
        margin-top: 8px;
      }

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }
    }
  }
`;

export const Actions = styled.div`
  .listControlPanel {
    display: flex;
    flex-direction: column;
    padding: 10px 0 0 50px;

    a {
      color: #fafafa;
      text-decoration: none;
      font-size: 1.6rem;

      & + a {
        margin-top: 8px;
      }

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }
    }
  }
`;

export const Services = styled.div`
  .listControlPanel {
    display: flex;
    flex-direction: column;
    padding: 10px 0 0 50px;

    a {
      color: #fafafa;
      text-decoration: none;
      font-size: 1.6rem;

      & + a {
        margin-top: 8px;
      }

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }
    }
  }
`;
