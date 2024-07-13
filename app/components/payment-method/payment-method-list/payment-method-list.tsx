"use client";

import { PaymentOptionsType } from "@/app/types";

import { PaymentMethodListWrapper } from "./payment-method-list.styled";

import { PaymentMethodOption } from "../..";

import { useState } from "react";

interface PaymentMethodListProps {
  paymentOptions: PaymentOptionsType;
}

export function PaymentMethodList({ paymentOptions }: PaymentMethodListProps) {
  const [selectedInstallmentsOption, setSelectedInstallmentsOption] = useState<
    number | null
  >(null);

  const handleSelectOption = (installments: number) => {
    if (selectedInstallmentsOption === installments) {
      setSelectedInstallmentsOption(null);
      return;
    }

    setSelectedInstallmentsOption(installments);
  };

  return (
    <PaymentMethodListWrapper>
      {paymentOptions.map((paymentOption, i) => (
        <PaymentMethodOption
          key={i}
          paymentOption={paymentOption}
          isActivated={
            selectedInstallmentsOption === paymentOption.installments
          }
          onSelect={() => handleSelectOption(paymentOption.installments)}
        />
      ))}
    </PaymentMethodListWrapper>
  );
}
