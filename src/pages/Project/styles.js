/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.section`
  /* padding: 1rem 3rem; */
  color: white;
`;

export const TasksHeader = styled.div`
  margin: 2rem 0 1rem;
  padding-bottom: .5rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: bottom;

  &::before {
    content: '';
    position: absolute;
    border-top: 1px solid rgba(255,255,255, .2);
    width: 100%;
    bottom:0
  }

  h3 {
    align-self: flex-end;
  }
`;
