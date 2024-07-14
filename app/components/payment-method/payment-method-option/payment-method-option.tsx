"use client";

import formatCurrency from "@/app/utils/formatCurrency";

import { PaymentOptionType } from "@/app/types";

import { PaymentMethodCheckmark } from "../payment-method-checkmark/payment-method-checkmark";

import {
  PaymentMethodOptionWrapper,
  SpecialDescription,
  OptionDetails,
  Description,
  Label,
  Tag,
} from "./payment-method-option.styled";

import Image from "next/image";

import { KeyboardEvent } from "react";

interface PaymentMethodOptionProps {
  paymentOption: PaymentOptionType;
  isActivated?: boolean;
  onSelect: () => void;
}

export function PaymentMethodOption({
  paymentOption,
  isActivated,
  onSelect,
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
    <PaymentMethodOptionWrapper
      $isActivated={isActivated}
      onClick={onSelect}
      role="option"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-selected={isActivated}
    >
      {oneInstallment && <Label>Pix</Label>}
      {twoInstallments && <Label>Pix Parcelado</Label>}

      <OptionDetails>
        <div>
          <span>{installments}x</span>
          <p>{installmentPrice}</p>
        </div>
        <PaymentMethodCheckmark isActivated={isActivated} />
      </OptionDetails>

      {oneInstallment ? (
        <SpecialDescription>
          Ganhe <b>3%</b> de Cashback
        </SpecialDescription>
      ) : (
        <Description>Total: {formatedPrice}</Description>
      )}

      {(oneInstallment || bestInstallmentOption) && (
        <Tag>
          {oneInstallment ? (
            <p>
              <b>🤑 R$ 300,00</b> de volta no seu Pix na hora
            </p>
          ) : (
            <p>
              <b>-3% de juros:</b> Melhor opção de parcelamento
            </p>
          )}
          <Image src="./tag.svg" alt="Tag" width={10} height={10} />
        </Tag>
      )}
    </PaymentMethodOptionWrapper>
  );
}
