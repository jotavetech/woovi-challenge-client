"use client";

import {
  PixPayment as PixPaymentSection,
  InstallmentPhases,
  Container,
  Slide,
  DueDate,
  Faq,
} from "@/app/components";

import { usePaymentOptionStore } from "@/app/stores/usePaymentOptionStore";

import formatCurrency from "@/app/utils/format-currency";

export default function PixPaymentPage() {
  const paymentOption = usePaymentOptionStore((state) => state.option);

  const { installments, price } = paymentOption!;

  const titleMessage =
    installments === 1
      ? `Pague o valor único de ${formatCurrency(price)} pelo Pix`
      : `Pague a entrada de ${formatCurrency(price / installments)} pelo Pix`;

  if (paymentOption) {
    return (
      <Slide direction="left" timeout={500}>
        <Container title={titleMessage}>
          <PixPaymentSection />
          <DueDate />
          <InstallmentPhases
            phase={1}
            installments={installments}
            price={price}
          />
          <Faq />
        </Container>
      </Slide>
    );
  }
}
