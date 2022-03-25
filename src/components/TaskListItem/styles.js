import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid white;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  margin: .5rem 0;
  border-radius: 8px;
  `;

export const Main = styled.div`
  flex-grow: 1;
`;

export const Title = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  color: white;
`;
