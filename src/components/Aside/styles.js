import styled from 'styled-components';

const StyledAside = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background-color: #14b;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div > p {
      display: grid;
      place-items: center;
  }
`;

export default StyledAside;
