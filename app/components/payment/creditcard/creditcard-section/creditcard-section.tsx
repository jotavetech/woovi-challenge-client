"use client";

import paymentFormSchema from "@/app/helpers/schemas/payment-form-schema";

import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";

import { FormEvent, useState } from "react";

import { useForm } from "react-hook-form";

import { CreditCardForm } from "../creditcard-form/creditcard-form";

import { usePaymentOptionStore } from "@/app/stores/usePaymentOptionStore";

export function CreditCardSection() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const paymentOption = usePaymentOptionStore((state) => state.option);

  const { handleSubmit, register, formState } = useForm({
    resolver: zodResolver(paymentFormSchema),
  });

  const onSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push("/payment/success");
    }, 2000);
  };
  return (
    <CreditCardForm
      onSubmit={handleSubmit(onSubmit)}
      loading={loading}
      register={register}
      formState={formState}
      installments={paymentOption!.installments}
      price={paymentOption!.price}
    />
  );
}
