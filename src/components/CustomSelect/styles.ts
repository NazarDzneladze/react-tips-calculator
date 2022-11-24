import { StylesConfig } from "react-select";
import { IOption } from "../../types";

export const styles: StylesConfig<IOption> = {
  singleValue: (baseStyles) => ({
    ...baseStyles,
    textAlign: "center",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 18,
    color: "#756C6C",
  }),
  indicatorsContainer: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  control: (baseStyles) => ({
    ...baseStyles,
    height: 68,
    borderRadius: 30,
    border: "none",
  }),
};
