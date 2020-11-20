import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;

  div {
    border-radius: 10px;
    box-shadow: 0 0 3px ${shade(0.2, '#ff9000')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${shade(0.1, '#fafafa')};
    color: #312e38;
    transition: background 0.5s;

    h2 {
      margin: 10px 0 20px;
    }

    p {
      flex: 1;
      font-size: 2.5rem;
      color: ${shade(0.2, '#ff9000')};
      font-weight: 500;
    }

    &:hover {
      background: transparent;
      box-shadow: 0 0 5px ${shade(0.2, '#ff9000')};
      h2 {
        color: #fafafa;
      }
    }
  }
`;

export const CardActiveClient = styled.div`
  width: 250px;
  height: 120px;
`;

export const CardInativeClient = styled.div`
  width: 250px;
  height: 120px;
`;

export const CardActiveServers = styled.div`
  width: 250px;
  height: 120px;
`;

export const CardInativeServers = styled.div`
  width: 250px;
  height: 120px;
`;
