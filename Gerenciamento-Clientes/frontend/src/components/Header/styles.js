import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  #displayOff {
    display: none;
  }

  #displayOn {
    position: fixed;
    height: 100vh;
    width: 350px;
    border-right: 1px solid ${shade(0.2, '#ff9000')};
  }

  #displayAbsolute {
    position: absolute;
  }

  #displayFixed {
    position: fixed;
  }
`;

export const Icon = styled.button`
  background: transparent;
  border: 0;
  margin-top: 2.6rem;
  margin-left: 1.6rem;
  color: #fafafa;
  transition: color 0.2s;
  z-index: 1;

  &:hover {
    color: ${shade(0.2, '#ff9000')};
  }

  svg {
    width: 3.6rem;
    height: 3.6rem;
  }

  @media (max-width: 320px) {
    svg {
      width: 2.8rem;
      height: 2.8rem;
    }
  }

  @media (min-width: 321px) {
    svg {
      width: 3rem;
      height: 3rem;
    }
  }

  @media (min-width: 401px) {
    svg {
      width: 3.1rem;
      height: 3.1rem;
    }
  }

  @media (min-width: 471px) {
    svg {
      width: 3.3rem;
      height: 3.3rem;
    }
  }

  @media (min-width: 571px) {
    svg {
      width: 3.4rem;
      height: 3.4rem;
    }
  }

  @media (min-width: 671px) {
    svg {
      width: 3.6rem;
      height: 3.6rem;
    }
  }

  @media (min-width: 769px) {
    svg {
      width: 3.8rem;
      height: 3.8rem;
    }
  }
`;

export const Content = styled.div`
  padding: 100px 20px;
  background: #312e38;
  opacity: 0.9;

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
      transition: color 0.2s;

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
      transition: color 0.2s;

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
      transition: color 0.2s;

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
      transition: color 0.2s;

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
