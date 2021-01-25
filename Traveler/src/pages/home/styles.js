import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 1024px;
  padding: 20px;
`;

export const Header = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 174px;
    height: 100%;
    background: #dde9f0;
    border: 0;
    border-radius: 10px;
    color: #115d8c;
  }
`;

export const Body = styled.div`
  display: flex;
`;

export const DivDescriptions = styled.div`
  flex: 1;
  height: 100vh;

  h1 {
    size: 80px;
    line-height: 74px;
  }

  border: 1px solid red;
`;

export const DivCards = styled.div`
  flex: 1;

  border: 1px solid green;
`;
