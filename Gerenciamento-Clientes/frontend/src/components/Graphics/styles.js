import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  max-height: 500px;
  padding: 10px;
  border: 1px solid ${shade(0.7, '#fafafa')};
`;
