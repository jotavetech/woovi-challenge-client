"use client";

import { PaymentOptionsType } from "@/app/types";

import {
  PaymentMethodButtonWrapper,
  PaymentMethodListWrapper,
  PaymentMethodButton,
  PaymentMethodUlList,
} from "./payment-method-list.styled";

import { PaymentMethodOption } from "../..";

import { useState } from "react";

import { ArrowRight } from "lucide-react";

import { useRouter } from "next/navigation";

import { usePaymentIdStore } from "@/app/stores/usePaymentIdStore";

import uniqid from "uniqid";

import { usePaymentOptionStore } from "@/app/stores/usePaymentOptionStore";
import findPaymentOption from "@/app/utils/find-payment-option";

interface PaymentMethodListProps {
  paymentOptions: PaymentOptionsType;
}

export function PaymentMethodList({ paymentOptions }: PaymentMethodListProps) {
  const [selectedInstallmentsOption, setSelectedInstallmentsOption] = useState<
    number | null
  >(null);

  const router = useRouter();

  const setPaymentId = usePaymentIdStore((state) => state.setId);
  const setPaymentOption = usePaymentOptionStore((state) => state.setOption);

  const handleSelectOption = (installments: number) => {
    if (selectedInstallmentsOption === installments) {
      setSelectedInstallmentsOption(null);
      return;
    }

    setSelectedInstallmentsOption(installments);
  };

  const handleContinueToPayment = () => {
    if (selectedInstallmentsOption) {
      const paymentOption = findPaymentOption(
        String(selectedInstallmentsOption)
      );

      if (paymentOption) {
        const paymentId = uniqid();

        setPaymentId(paymentId);
        setPaymentOption(paymentOption);
      }

      router.push(`/pix-payment/`);
    }
  };

  return (
    <PaymentMethodListWrapper>
      <PaymentMethodUlList
        role="listbox"
        aria-label="Veja todas as opções de pagamento"
      >
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
      </PaymentMethodUlList>

      {selectedInstallmentsOption && (
        <PaymentMethodButtonWrapper>
          <PaymentMethodButton
            onClick={handleContinueToPayment}
            aria-label={`Continuar para o pagamento em ${selectedInstallmentsOption} vezes`}
          >
            Continuar em {selectedInstallmentsOption}x <ArrowRight />
          </PaymentMethodButton>
        </PaymentMethodButtonWrapper>
      )}
    </PaymentMethodListWrapper>
  );
}
