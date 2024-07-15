"use client";

import { PaymentOptionsType } from "@/app/types";

import {
  MethodButton,
  MethodButtonWrapper,
  MethodsList,
  MethodsWrapper,
} from "./method-list.styled";

import { MethodOption } from "../method-option/method-option";

import { ArrowRight } from "lucide-react";

import uniqid from "uniqid";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { usePaymentIdStore } from "@/app/stores/usePaymentIdStore";
import { usePaymentOptionStore } from "@/app/stores/usePaymentOptionStore";

import findPaymentOption from "@/app/utils/find-payment-option";

interface PaymentMethodListProps {
  paymentOptions: PaymentOptionsType;
}

export function MethodList({ paymentOptions }: PaymentMethodListProps) {
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

      router.push(`/payment/pix`);
    }
  };

  return (
    <MethodsWrapper>
      <MethodsList
        role="listbox"
        aria-label="Veja todas as opções de pagamento"
      >
        {paymentOptions.map((paymentOption, i) => (
          <MethodOption
            key={i}
            transitionTimeout={i * 600}
            paymentOption={paymentOption}
            isActivated={
              selectedInstallmentsOption === paymentOption.installments
            }
            onSelect={() => handleSelectOption(paymentOption.installments)}
          />
        ))}
      </MethodsList>

      {selectedInstallmentsOption && (
        <MethodButtonWrapper>
          <MethodButton
            onClick={handleContinueToPayment}
            aria-label={`Continuar para o pagamento em ${selectedInstallmentsOption} vezes`}
          >
            Continuar em {selectedInstallmentsOption}x <ArrowRight />
          </MethodButton>
        </MethodButtonWrapper>
      )}
    </MethodsWrapper>
  );
}
