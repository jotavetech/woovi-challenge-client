"use client";

import { PaymentOptionsType } from "@/app/types";

import { StyledPaymentMethodList } from "./payment-method-list.styled";

import { PaymentMethodOption } from "../..";

import { useState } from "react";

interface PaymentMethodListProps {
  paymentOptions: PaymentOptionsType;
}

export function PaymentMethodList({ paymentOptions }: PaymentMethodListProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleSelectOption = (paymentTimes: number) => {
    if (selectedOption === paymentTimes) {
      setSelectedOption(null);
      return;
    }

    setSelectedOption(paymentTimes);
  };

  return (
    <StyledPaymentMethodList>
      {paymentOptions.map((paymentOption, i) => (
        <PaymentMethodOption
          key={i}
          paymentOption={paymentOption}
          isActivated={selectedOption === paymentOption.paymentTimes}
          onSelect={() => handleSelectOption(paymentOption.paymentTimes)}
        />
      ))}
    </StyledPaymentMethodList>
  );
}
