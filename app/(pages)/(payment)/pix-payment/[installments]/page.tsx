"use client";

import {
  Container,
  PixPaymentSection,
  InstallmentList,
  PaymentFaq,
  Identifier,
  PaymentValidDate,
} from "@/app/components";

import paymentOptions from "@/app/data/payment-options.json";

import formatCurrency from "@/app/utils/formatCurrency";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

interface PixPaymentProps {
  params: { installments: number };
}

export default function PixPayment({ params }: PixPaymentProps) {
  const router = useRouter();

  const installments = +params.installments;

  const paymentOption = paymentOptions.find(
    (option) => +option.installments === installments
  );

  useEffect(() => {
    if (!paymentOption) return router.push("/");
  }, [router, paymentOption]);

  if (!paymentOption) return null;

  const titleMessage =
    installments === 1
      ? `Pague o valor único de ${formatCurrency(paymentOption.price)} pelo Pix`
      : `Pague a entrada de ${formatCurrency(
          paymentOption.price / installments
        )} pelo Pix`;

  if (paymentOption) {
    return (
      <main>
        <Container title={titleMessage}>
          <PixPaymentSection installments={installments} />
          <InstallmentList
            phase={1}
            installments={installments}
            price={paymentOption.price}
          />
          <PaymentValidDate />
          <PaymentFaq price={paymentOption.price} />
        </Container>
        <Identifier id="2c1b951f356c4680b13ba1c9fc889c47" />
      </main>
    );
  }
}
