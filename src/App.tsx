import React, { Fragment } from "react";
import { Form } from "./components/Form/Form";
import { GlobalStyle } from "./GlobalStyles";
import { StyledApp } from "./styles";

export const App = () => {
  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
      <StyledApp>
        <Form />
      </StyledApp>
    </Fragment>
  );
};
