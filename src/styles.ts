import styled from "styled-components";
import CirclesImage from "./assets/images/combined-circles.png";

const StyledApp = styled.div`
  background: top left url(${CirclesImage}) no-repeat #eaf2f2;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  padding-bottom: 150px;
  padding-top: 230px;
`;

const Circles = styled.img``;

export { StyledApp, Circles };
