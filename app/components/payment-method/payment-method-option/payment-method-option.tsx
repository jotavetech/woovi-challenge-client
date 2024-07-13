"use client";

import formatCurrency from "@/app/utils/formatCurrency";

import { PaymentOptionType } from "@/app/types";

import { PaymentMethodCheckmark } from "../payment-method-checkmark/payment-method-checkmark";
import { StyledPaymentMethodOption } from "./payment-method-option.styled";
import Image from "next/image";

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
  const { price, paymentTimes } = paymentOption;

  const formatedPrice = formatCurrency(price);
  const installmentPrice = formatCurrency(price / paymentTimes);

  const firstOption = paymentTimes === 1;
  const secondOption = paymentTimes === 2;
  const bestOption = paymentTimes === 4;

  return (
    <StyledPaymentMethodOption isActivated={isActivated} onClick={onSelect}>
      {firstOption && <p className="label">Pix</p>}
      {secondOption && secondOption && <p className="label">Pix Parcelado</p>}
      <div className="option-details">
        <div>
          <span>{paymentTimes}x</span>
          <p>{installmentPrice}</p>
        </div>
        <PaymentMethodCheckmark isActivated={isActivated} />
      </div>
      {firstOption ? (
        <p className="special-promo">
          Ganhe <b>3%</b> de Cashback
        </p>
      ) : (
        <p className="total-price">Total: {formatedPrice}</p>
      )}
      {(firstOption || bestOption) && (
        <p className="tag">
          {firstOption ? (
            <p>
              <b>🤑 R$ 300,00</b> de volta no seu Pix na hora
            </p>
          ) : (
            <p>
              <b>-3% de juros:</b> Melhor opção de parcelamento
            </p>
          )}
          <Image src="./tag.svg" alt="Tag" width={10} height={10} />
        </p>
      )}
    </StyledPaymentMethodOption>
  );
}
