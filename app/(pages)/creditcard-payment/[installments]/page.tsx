"use client";

import paymentOptions from "@/app/data/payment-options.json";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import {
  Container,
  CreditCardPaymentForm,
  Identifier,
  InstallmentList,
  PaymentFaq,
  PaymentValidDate,
} from "@/app/components";

interface CreditCardPaymentPageProps {
  params: {
    installments: string;
  };
}

export default function CreditCardPaymentPage({
  params,
}: CreditCardPaymentPageProps) {
  const router = useRouter();
  const installments = +params.installments;

  const paymentOption = paymentOptions.find(
    (option) => +option.installments === installments
  );

  useEffect(() => {
    if (!paymentOption) return router.push("/");
  }, [router, paymentOption]);

  if (!paymentOption) return null;

  if (installments <= 1) return router.push("/");

  const titleMessage = `João, pague o restante em ${
    installments - 1
  }x no cartão`;

  return (
    <main>
      <Container title={titleMessage}>
        <CreditCardPaymentForm
          installments={installments}
          price={paymentOption.price}
        />
        <PaymentValidDate />
        <InstallmentList
          phase={2}
          installments={installments}
          price={paymentOption.price}
        />
        <PaymentFaq price={paymentOption.price} />
      </Container>
      <Identifier id="2c1b951f356c4680b13ba1c9fc889c47" />
    </main>
  );
}
