"use client";

import { Grid } from "@mui/material";

import {
  CreditCardPaymentFormWrapper,
  SubmitButton,
} from "./creditcard-payment-form.styled";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { InputField } from "../..";

interface CreditCardPaymentFormProps {
  installments: number;
  price: number;
}

const paymentFormSchema = z.object({
  cardHolder: z
    .string()
    .min(3, { message: "O nome precisa conter mais de 3 caracteres." }),
  cpf: z
    .string()
    .length(11, { message: "O CPF precisa conter 11 caracteres." }),
  cardNumber: z.string().length(16, {
    message: "O número do cartão precisa conter 16 caracteres.",
  }),
  expirationDate: z.string().length(6, {
    message: "A data de vencimento precisa conter 6 caracteres.",
  }),
  cvv: z.string().length(3, {
    message: "O CVV precisa conter 3 caracteres.",
  }),
});

export function CreditCardPaymentForm({
  installments,
  price,
}: CreditCardPaymentFormProps) {
  const { handleSubmit, register, formState } = useForm({
    resolver: zodResolver(paymentFormSchema),
  });

  const onSubmit = (data: any) => {
    // todo
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
          <SubmitButton type="submit">Pagar</SubmitButton>
        </Grid>
      </Grid>
    </CreditCardPaymentFormWrapper>
  );
}
