import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  /* aling-items: center; */
  justify-content: space-between;

  width: 100vw;
  height: 10vh;
  padding: 0 4rem;

  background-color: var(--purple-600);

  > img {
    margin-top: 12px;
    margin-left: 2px;
    height: 2.5rem;
  }

  > p {
    color: var(--font-white);
  }
  > button {
    margin: 12px;
    font-size: 16px;
  }
`;
