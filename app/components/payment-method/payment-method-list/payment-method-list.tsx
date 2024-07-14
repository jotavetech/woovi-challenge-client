"use client";

import { PaymentOptionsType } from "@/app/types";

import {
  PaymentMethodButtonWrapper,
  PaymentMethodListWrapper,
  PaymentMethodButton,
} from "./payment-method-list.styled";

import { PaymentMethodOption } from "../..";

import { useState } from "react";

import { ArrowRight } from "lucide-react";

import Link from "next/link";

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
      <ul role="listbox" aria-label="Veja todas as opções de pagamento">
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
      </ul>

      {selectedInstallmentsOption && (
        <PaymentMethodButtonWrapper>
          <Link href={`/pix-payment/${selectedInstallmentsOption}`}>
            <PaymentMethodButton
              aria-label={`Continuar para o pagamento em ${selectedInstallmentsOption} vezes`}
            >
              Continuar em {selectedInstallmentsOption}x <ArrowRight />
            </PaymentMethodButton>
          </Link>
        </PaymentMethodButtonWrapper>
      )}
    </PaymentMethodListWrapper>
  );
}
