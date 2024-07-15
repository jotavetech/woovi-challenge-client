"use client";

import formatCurrency from "@/app/utils/format-currency";

import { FaqTotalPrice, FaqDetails, FaqWrapper, FaqCET } from "./faq.styled";

import { Accordion } from "../..";

import { usePaymentOptionStore } from "@/app/stores/usePaymentOptionStore";

export function Faq() {
  const price = usePaymentOptionStore((state) => state.option?.price);

  return (
    <FaqWrapper>
      <FaqDetails>
        <FaqCET>CET: 0,5%</FaqCET>
        <FaqTotalPrice>Total: {formatCurrency(price!)}</FaqTotalPrice>
      </FaqDetails>
      <Accordion
        title="Como funciona?"
        description="Você tem duas opções: Pagar o valor total em 1x no pix, ou pagar a entrada no pix e o restante com o cartão de cŕedito. É só escolher a melhor opção para você que cuidamos do resto."
      />
    </FaqWrapper>
  );
}
