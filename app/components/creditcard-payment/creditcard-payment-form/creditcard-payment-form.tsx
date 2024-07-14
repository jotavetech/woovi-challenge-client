"use client";

import { Grid } from "@mui/material";

import {
  CreditCardPaymentFormWrapper,
  SubmitButton,
} from "./creditcard-payment-form.styled";

import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { InputField } from "../..";

import paymentFormSchema from "@/app/validators/schemas/payment-form-schema";

interface CreditCardPaymentFormProps {
  installments: number;
  price: number;
}

export function CreditCardPaymentForm({
  installments,
  price,
}: CreditCardPaymentFormProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { handleSubmit, register, formState } = useForm({
    resolver: zodResolver(paymentFormSchema),
  });

  const onSubmit = () => {
    setLoading(true);

    // Simulate a payment confirmation
    setTimeout(() => {
      setLoading(false);
      router.push("/confirmation");
    }, 2000);
  };

  return (
    <CreditCardPaymentFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <InputField
          name="cardHolder"
          label="Nome completo"
          gridExtends="full"
          formState={formState}
          register={register}
        />
        <InputField
          name="cpf"
          label="CPF"
          gridExtends="full"
          formState={formState}
          register={register}
        />
        <InputField
          name="cardNumber"
          label="Número do cartão"
          formState={formState}
          register={register}
        />
        <InputField
          name="expirationDate"
          label="Vencimento"
          gridExtends="half"
          formState={formState}
          register={register}
        />
        <InputField
          name="cvv"
          label="CVV"
          gridExtends="half"
          formState={formState}
          register={register}
        />
        <Grid item xs={12}>
          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Confirmando..." : "Pagar"}
          </SubmitButton>
        </Grid>
      </Grid>
    </CreditCardPaymentFormWrapper>
  );
}
