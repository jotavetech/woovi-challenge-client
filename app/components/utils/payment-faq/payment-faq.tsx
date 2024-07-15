"use client";

import formatCurrency from "@/app/utils/format-currency";

import {
  PaymentFaqTotalPrice,
  PaymentFaqDetails,
  PaymentFaqWrapper,
  PaymentFaqCET,
} from "./payment-faq.styled";

import { Accordion } from "../..";

import { usePaymentOptionStore } from "@/app/stores/usePaymentOptionStore";

export function PaymentFaq() {
  const price = usePaymentOptionStore((state) => state.option?.price);

  return (
    <PaymentFaqWrapper>
      <PaymentFaqDetails>
        <PaymentFaqCET>CET: 0,5%</PaymentFaqCET>
        <PaymentFaqTotalPrice>
          Total: {formatCurrency(price!)}
        </PaymentFaqTotalPrice>
      </PaymentFaqDetails>
      <Accordion
        title="Como funciona?"
        description="Você tem duas opções: Pagar o valor total em 1x no pix, ou pagar a entrada no pix e o restante com o cartão de cŕedito. É só escolher a melhor opção para você que cuidamos do resto."
      />
    </PaymentFaqWrapper>
  );
}
