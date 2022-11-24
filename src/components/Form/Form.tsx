import { useEffect, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { IOption } from "../../types";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, SubTitle, Title, Total } from "./styles";

export const Form = () => {
  const options: IOption[] = [
    {
      value: 10,
      label: "10%",
    },
    {
      value: 15,
      label: "15%",
    },
    {
      value: 20,
      label: "20%",
    },
  ];
  const bill = useInput();
  const personsCount = useInput();
  const [total, setTotal] = useState(0);
  const [tips, setTips] = useState<IOption>(options[0]);
  const [isDisable, setDisable] = useState(true);

  const handleTotal = () => {
    const billTotalAmount = +bill.value * (1 + tips.value / 100);
    const amountPerEachPerson = billTotalAmount / +personsCount.value;

    setTotal(amountPerEachPerson);
  };

  const onChange = (newValue: IOption | null) => {
    if (newValue) {
      setTips(newValue);
    }
  };

  useEffect(() => {
    if (bill.value && personsCount.value !== "") {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [bill.value, personsCount.value]);

  return (
    <StyledForm>
      <Title>Welcome to App</Title>
      <SubTitle>Let’s go calculate your tips</SubTitle>
      <Input {...bill} type="number" placeholder="Enter bill" hasFilter={true} />
      <Input {...personsCount} placeholder="Enter persons" type="number" />
      <CustomSelect value={tips} options={options} onChange={onChange} />
      <Total>Total: {total.toFixed(2)}$</Total>
      <Button handleTotal={handleTotal} type="button" hasOpacity={isDisable} isDisable={isDisable}>
        Ohhhoooo 🍻
      </Button>
    </StyledForm>
  );
};
