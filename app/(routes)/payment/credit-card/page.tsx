"use client";

import {
  InstallmentPhases,
  DueDate,
  Container,
  Slide,
  Faq,
  CreditCardSection,
} from "@/app/components";

import { usePaymentOptionStore } from "@/app/stores/usePaymentOptionStore";

export default function CreditCardPaymentPage() {
  const paymentOption = usePaymentOptionStore((state) => state.option);

  const { installments, price } = paymentOption!;

  const titleMessage = `João, pague o restante em ${
    installments - 1
  }x no cartão`;

  return (
    <Slide direction="right" timeout={500}>
      <Container title={titleMessage}>
        <CreditCardSection />
        <DueDate />
        <InstallmentPhases
          phase={2}
          installments={installments}
          price={price}
        />
        <Faq />
      </Container>
    </Slide>
  );
}
