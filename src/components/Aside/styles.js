import styled from 'styled-components';

const StyledAside = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${({ theme }) => theme.config.asideWidth};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default StyledAside;
