import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid white;
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  margin: .5rem 2rem;
  border-radius: 8px;
  `;

export const Main = styled.div`
  flex-grow: 1;
`;

export const Code = styled.div`
  border: 1px solid white;
  display: grid;
  place-items: center;
  padding: .5rem;
  border-radius: 5px;
  font-weight: 700;
`;
