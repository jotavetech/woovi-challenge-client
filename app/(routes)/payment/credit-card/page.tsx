"use client";

import {
  Container,
  CreditCardForm,
  InstallmentPhases,
  PaymentFaq,
  PaymentValidDate,
} from "@/app/components";

import { usePaymentOptionStore } from "@/app/stores/usePaymentOptionStore";

export default function CreditCardPaymentPage() {
  const paymentOption = usePaymentOptionStore((state) => state.option);

  const { installments, price } = paymentOption!;

  const titleMessage = `João, pague o restante em ${
    installments - 1
  }x no cartão`;

  return (
    <Container title={titleMessage}>
      <CreditCardForm installments={installments} price={price} />
      <PaymentValidDate />
      <InstallmentPhases phase={2} installments={installments} price={price} />
      <PaymentFaq />
    </Container>
  );
}
