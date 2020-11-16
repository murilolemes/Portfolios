import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  #displayOff {
    display: none;
  }

  #displayOn {
    height: 100%;
    width: 350px;
    box-shadow: 0 -5px 5px ${shade(0.2, '#ff9000')};
  }
`;

export const Icon = styled.button`
  background: transparent;
  border: 0;
  position: absolute;
  margin-top: 2.6rem;
  margin-left: 1.6rem;
  color: #fafafa;

  &:hover {
    color: ${shade(0.2, '#ff9000')};
  }

  svg {
    width: 3.6rem;
    height: 3.6rem;
  }
`;

export const Content = styled.div`
  padding: 100px 20px;

  .content {
    & + div {
      margin-top: 3rem;
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
      width: 1.9rem;
      height: 1.9rem;
      margin-right: 1.5rem;
    }

    h2 {
      font-size: 2.4rem;
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
  margin-bottom: 4rem;
  color: #fafafa;
`;

export const ControlPanel = styled.div`
  .listControlPanel {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 50px;

    a {
      display: flex;
      align-items: center;
      color: #fafafa;
      text-decoration: none;
      font-size: 2rem;

      & + a {
        margin-top: 0.8rem;
      }

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }

      svg {
        width: 2rem;
        height: 2rem;
        margin-right: 0.8rem;
      }
    }
  }
`;

export const Actions = styled.div`
  .listControlPanel {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 50px;

    a {
      display: flex;
      align-items: center;
      color: #fafafa;
      text-decoration: none;
      font-size: 2rem;

      & + a {
        margin-top: 0.8rem;
      }

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }

      svg {
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 0.8rem;
      }
    }
  }
`;

export const Services = styled.div`
  .listControlPanel {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 50px;

    a {
      display: flex;
      align-items: center;
      color: #fafafa;
      text-decoration: none;
      font-size: 2rem;

      & + a {
        margin-top: 0.8rem;
      }

      &:hover {
        color: ${shade(0.2, '#ff9000')};
      }

      svg {
        width: 1.8rem;
        height: 1.8rem;
        margin-right: 0.8rem;
      }
    }
  }
`;
