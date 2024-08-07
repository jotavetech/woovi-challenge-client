"use client";

import formatCurrency from "@/app/utils/format-currency";

import { PaymentOptionType } from "@/app/types";

import { MethodCheckmark } from "../method-checkmark/method-checkmark";

import {
  MethodOptionSpecialDescription,
  MethodOptionDescription,
  MethodOptionWrapper,
  MethodOptionDetails,
  MethodOptionLabel,
  MethodOptionTag,
} from "./method-option.styled";

import { KeyboardEvent } from "react";

import { Fade } from "@/app/components";

interface PaymentMethodOptionProps {
  paymentOption: PaymentOptionType;
  transitionTimeout?: number;
  isActivated?: boolean;
  onSelect: () => void;
}

export function MethodOption({
  paymentOption,
  isActivated,
  onSelect,
  transitionTimeout,
}: PaymentMethodOptionProps) {
  const { price, installments } = paymentOption;

  const formatedPrice = formatCurrency(price);
  const installmentPrice = formatCurrency(price / installments);

  const oneInstallment = installments === 1;
  const twoInstallments = installments === 2;
  const bestInstallmentOption = installments === 4;

  const handleKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
    if (e.key === "Enter") {
      onSelect();
    }
  };

  return (
    <Fade timeout={transitionTimeout ?? 1000}>
      <MethodOptionWrapper
        $isActivated={isActivated}
        role="option"
        tabIndex={0}
        onClick={onSelect}
        onKeyDown={handleKeyDown}
        aria-selected={isActivated}
        aria-label={`Pressione Enter para selecionar essa opção de pagamento em ${installments} vezes de ${installmentPrice}`}
      >
        {oneInstallment && <MethodOptionLabel>Pix</MethodOptionLabel>}
        {twoInstallments && (
          <MethodOptionLabel>Pix Parcelado</MethodOptionLabel>
        )}

        <MethodOptionDetails>
          <div>
            <span>{installments}x</span>
            <p>{installmentPrice}</p>
          </div>
          <MethodCheckmark isActivated={isActivated} />
        </MethodOptionDetails>

        {oneInstallment ? (
          <MethodOptionSpecialDescription>
            Ganhe <b>3%</b> de Cashback
          </MethodOptionSpecialDescription>
        ) : (
          <MethodOptionDescription>
            Total: {formatedPrice}
          </MethodOptionDescription>
        )}

        {(oneInstallment || bestInstallmentOption) && (
          <MethodOptionTag $isActivated={isActivated}>
            {oneInstallment ? (
              <p>
                <b>🤑 R$ 300,00</b> de volta no seu Pix na hora
              </p>
            ) : (
              <p>
                <b>-3% de juros:</b> Melhor opção de parcelamento
              </p>
            )}
          </MethodOptionTag>
        )}
      </MethodOptionWrapper>
    </Fade>
  );
}
