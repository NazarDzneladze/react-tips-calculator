import { ReactNode } from "react";
import { ButtonType } from "../../types";
import { StyledButton } from "./styles";

interface IProps {
  children: ReactNode;
  handleTotal?: () => void;
  type?: ButtonType;
  hasOpacity: boolean;
  isDisable: boolean;
}

export const Button = ({ children, handleTotal, type, hasOpacity, isDisable }: IProps) => {
  return (
    <StyledButton type={type} onClick={handleTotal} hasOpacity={hasOpacity} disabled={isDisable}>
      {children}
    </StyledButton>
  );
};
