"use client";

import formatCurrency from "@/app/utils/formatCurrency";

import {
  PaymentFaqCET,
  PaymentFaqDetails,
  PaymentFaqTotalPrice,
  PaymentFaqWrapper,
} from "./payment-faq.styled";

import { Accordion } from "../..";

interface PaymentFaqProps {
  price: number;
}

export function PaymentFaq({ price }: PaymentFaqProps) {
  return (
    <PaymentFaqWrapper>
      <PaymentFaqDetails>
        <PaymentFaqCET>CET: 0,5%</PaymentFaqCET>
        <PaymentFaqTotalPrice>
          Total: {formatCurrency(price)}
        </PaymentFaqTotalPrice>
      </PaymentFaqDetails>
      <Accordion
        title="Como funciona?"
        description="Descrição do funcionamento"
      />
    </PaymentFaqWrapper>
  );
}
