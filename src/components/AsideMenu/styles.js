import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Menu = styled.div`
  position: absolute;
  width: 200px;
  border: 1px solid #888;
  left: 90%;
  bottom: 30%;
  border-radius: 5px;
  padding: 5px 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
