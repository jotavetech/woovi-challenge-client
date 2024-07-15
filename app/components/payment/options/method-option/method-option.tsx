"use client";

import formatCurrency from "@/app/utils/format-currency";

import { PaymentOptionType } from "@/app/types";

import { MethodCheckmark } from "../method-checkmark/method-checkmark";

import {
  MethodOptionWrapper,
  MethodOptionSpecialDescription,
  MethodOptionDetails,
  MethodOptionDescription,
  MethodOptionLabel,
  MethodOptionTag,
} from "./method-option.styled";

import Image from "next/image";

import { KeyboardEvent } from "react";
import { Fade } from "@mui/material";

interface PaymentMethodOptionProps {
  paymentOption: PaymentOptionType;
  isActivated?: boolean;
  onSelect: () => void;
}

export function MethodOption({
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
    <Fade in={true} timeout={1000}>
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
          <MethodOptionTag>
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
          </MethodOptionTag>
        )}
      </MethodOptionWrapper>
    </Fade>
  );
}
