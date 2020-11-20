import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid ${shade(0.5, '#fafafa')};
`;

export const Content = styled.div`
  width: 400px;
  height: 200px;
  border-left: 1px solid ${shade(0.2, '#ff9000')};
  border-bottom: 1px solid ${shade(0.2, '#ff9000')};
`;
