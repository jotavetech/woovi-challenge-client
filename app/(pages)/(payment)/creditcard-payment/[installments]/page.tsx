"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import {
  Container,
  CreditCardPaymentForm,
  InstallmentList,
  PaymentFaq,
  PaymentValidDate,
} from "@/app/components";

import findPaymentOption from "@/app/utils/find-payment-option";

interface CreditCardPaymentPageProps {
  params: {
    installments: string;
  };
}

export default function CreditCardPaymentPage({
  params,
}: CreditCardPaymentPageProps) {
  const router = useRouter();

  const paymentOption = findPaymentOption(params.installments);

  useEffect(() => {
    if (!paymentOption) return router.push("/");
  }, [router, paymentOption]);

  if (!paymentOption) return null;

  const { installments, price } = paymentOption;

  if (installments <= 1) return router.push("/");

  const titleMessage = `João, pague o restante em ${
    installments - 1
  }x no cartão`;

  return (
    <Container title={titleMessage}>
      <CreditCardPaymentForm installments={installments} price={price} />
      <PaymentValidDate />
      <InstallmentList phase={2} installments={installments} price={price} />
      <PaymentFaq price={price} />
    </Container>
  );
}
