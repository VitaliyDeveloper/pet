import { styled } from 'styled-components';

export const ContainerTitle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 150px;
  cursor: pointer;
  opacity: 0.8;
  color: var(--bg-color);

  &:hover {
    color: var(--second-color);
  }
`;
