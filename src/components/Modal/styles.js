import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: grid;
  place-items: center;
`;

export const Background = styled.div`
  background-color: rgba(0, 0, 0, .5);
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: inherit;
`;

export const Card = styled.div`
  background-color: #f0f0f0;
  z-index: 6;
  border-radius: 4px;
  padding: 30px;
  min-height: 200px;
  max-height: 85vh;
  min-width: min(400px, 85vw);
  max-width: 85vw;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, .3);
  display: grid;
  place-items: center;

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
