"use client";

import {
  Container,
  PixPaymentSection,
  InstallmentList,
  PaymentFaq,
  Identifier,
  PaymentValidDate,
} from "@/app/components";

import findPaymentOption from "@/app/utils/find-payment-option";
import formatCurrency from "@/app/utils/formatCurrency";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface PixPaymentProps {
  params: { installments: string };
}

export default function PixPayment({ params }: PixPaymentProps) {
  const router = useRouter();

  const paymentOption = findPaymentOption(params.installments);

  useEffect(() => {
    if (!paymentOption) return router.push("/");
  }, [router, paymentOption]);

  if (!paymentOption) return null;

  const { installments, price } = paymentOption;

  const titleMessage =
    installments === 1
      ? `Pague o valor único de ${formatCurrency(price)} pelo Pix`
      : `Pague a entrada de ${formatCurrency(price / installments)} pelo Pix`;

  if (paymentOption) {
    return (
      <main>
        <Container title={titleMessage}>
          <PixPaymentSection paymentId={"123"} />
          <InstallmentList
            phase={1}
            installments={installments}
            price={price}
          />
          <PaymentValidDate />
          <PaymentFaq price={price} />
        </Container>
        <Identifier id="123" />
      </main>
    );
  }
}
