import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(LinkRouter)`
  display: grid;
  place-items: center left;

  text-decoration: none;
  color: white;
  height: 40px;
  padding: 0 10px;
  background-color: transparent;
  width: 100%;
  font-size: 1rem;

  :hover {
    background-color: ${({ theme }) => theme.colors.third};
  }
`;

export default Link;
