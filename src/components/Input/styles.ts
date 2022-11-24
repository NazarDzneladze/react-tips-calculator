import styled from "styled-components";

const StyledInput = styled.input<{ hasFilter?: boolean }>`
  max-width: 100%;
  height: 68px;
  border-radius: 30px;
  text-align: center;
  border: none;
  filter: ${({ hasFilter }) =>
    hasFilter ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" : "none"};

  ::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    display: none;
  }
`;

export { StyledInput };
