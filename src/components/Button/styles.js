import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 7px 20px;
  border-radius: 5px;
  margin: 2px;
  cursor: pointer;
  transition: all 200ms;
  border: 2px solid;
  
  &.primary {
    background-color: #09f;
    border-color: #09f;
    color: white;

    &:hover {
      background-color: #06f;
      border-color: #06f;
    }
  }
  
  &.secondary {
    background-color: transparent;
    border-color: #09f;
    color: #09f;

    &:hover {
      border-color: #06f;
      color: #06f;
    }
  }
  
`;

export default StyledButton;
