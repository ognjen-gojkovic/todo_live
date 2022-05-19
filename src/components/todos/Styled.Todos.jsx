import styled from "styled-components";

export const TodosStyled = styled.div`
  width: 100%;
  height: 100%;

  .filter__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    backdrop-filter: blur(10px);
  }
`;
