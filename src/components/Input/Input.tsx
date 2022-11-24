import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IProps {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  hasFilter?: boolean;
}

export const Input = ({ placeholder, type, value, onChange, hasFilter }: IProps) => {
  return (
    <StyledInput
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
      hasFilter={hasFilter}
    />
  );
};
