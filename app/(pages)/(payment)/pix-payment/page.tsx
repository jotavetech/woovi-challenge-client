"use client";

import {
  Container,
  PixPaymentSection,
  InstallmentList,
  PaymentFaq,
  PaymentValidDate,
} from "@/app/components";

import { usePaymentOptionStore } from "@/app/stores/usePaymentOptionStore";

import formatCurrency from "@/app/utils/formatCurrency";

export default function PixPayment() {
  const paymentOption = usePaymentOptionStore((state) => state.option);

  const { installments, price } = paymentOption!;

  const titleMessage =
    installments === 1
      ? `Pague o valor único de ${formatCurrency(price)} pelo Pix`
      : `Pague a entrada de ${formatCurrency(price / installments)} pelo Pix`;

  if (paymentOption) {
    return (
      <Container title={titleMessage}>
        <PixPaymentSection paymentId={"123"} />
        <InstallmentList phase={1} installments={installments} price={price} />
        <PaymentValidDate />
        <PaymentFaq price={price} />
      </Container>
    );
  }
}
