import styled from "styled-components";

const StyledForm = styled.form`
  max-width: 439px;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 1fr);
  row-gap: 30px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 58px;
  color: #000000;
  justify-self: center;
  align-self: center;
`;

const SubTitle = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 38px;
  color: rgba(117, 108, 108, 0.57);
  justify-self: center;
  align-self: center;
`;

const Total = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  color: #000000;
  align-self: center;
`;

export { StyledForm, Title, SubTitle, Total };
