import styled from "styled-components";

export const DisplayTodosStyled = styled.ul`
  flex: 2;
  width: 100%;
  height: 100%;
  margin-right: 20%;

  li {
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    transition: all 1s ease-in-out;

    &.active {
      width: 200%;
      transition: all 1s ease-in-out;

      h2 {
        color: transparent;
        transition: all 1s ease-in-out;
      }

      .controller {
        button {
          color: transparent;
          transition: all 1s ease-in-out;
        }
      }
    }

    h2 {
      flex: 5;
      text-align: center;
      color: #dadada;
      letter-spacing: 2px;
    }

    .controller {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;

      button {
        transition: all 0.3s ease-in-out;
        border: none;
        outline: none;
        box-shadow: none;
        background: transparent;
        font-size: 1.2rem;

        &:disabled,
        &:hover:disabled,
        &:nth-of-type(1) {
          color: #837600;
          transform: scale(1);
        }

        &:hover {
          transform: scale(1.1);
          transition: all 0.3s ease-in-out;
        }

        &:nth-of-type(1) {
          color: var(--font);
        }

        &:nth-of-type(2) {
          color: grey;
        }
      }
    }
  }
`;
