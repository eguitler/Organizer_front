import styled from 'styled-components';

export const StyledItem = styled.div`
  margin: 25px auto;
  display: grid;
  place-items: center;
  position: relative;
  z-index: 10;
  cursor: pointer;
  width: fit-content;

  &:before {
    content:'';
    width: 50px;
    height: 50px;
    border-radius: 100%;
    position: absolute;
    z-index: -10;
  }

  &:hover:before {
      background-color: #99f;
      opacity: .15;
  }
`;

export const StyledItemTitle = styled.div`
  /* border: 1px solid #11275A; */
  position: absolute;
  left: calc(100% + 20px);
  padding: 5px 20px;
  white-space: nowrap;
  border-radius: 5px;
  background-color: #11275A;
  display: none;
  
  &.show {
    display: block;
    animation: fade 500ms;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* &:before {
    --size: 8px;

    content: '';
    border: var(--size) solid transparent;
    border-right: var(--size) solid #11275A;
    left: calc(var(--size) * -2);
    bottom: 50%;
    transform: translateY(50%);
    position: absolute;
  } */
`;
