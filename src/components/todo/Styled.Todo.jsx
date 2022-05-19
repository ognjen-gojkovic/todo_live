import styled from "styled-components";

export const TodoStyled = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    position: relative;
    .label {
      position: absolute;
      top: 17%;
      left: 0;
      transition: all 0.3s ease-in-out;
      color: #dadada;
      font-size: 1.3rem;
    }

    input {
      border: none;
      outline: none;
      background: transparent;
      border-bottom: 2px solid var(--font);
      color: #dadada;
      font-size: 1.3rem;

      &:focus ~ .label,
      &:not(input[value=""]) ~ .label {
        top: -20%;
        left: -3%;
        font-size: 12px;
      }
    }

    button {
      margin-left: 2rem;
      background: transparent;
      outline: none;
      color: var(--font);
      border: 1px solid var(--font);
      padding: 10px 20px;
      border-radius: 4px;
      text-align: center;
      transition: all 0.3s ease-in-out;

      &:disabled {
        color: #837600;
        border: 1px solid #837600;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;
