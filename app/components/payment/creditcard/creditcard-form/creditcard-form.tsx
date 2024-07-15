"use client";

import { Grid } from "@mui/material";

import {
  CreditCardFormWrapper,
  CreditCardButton,
} from "./creditcard-form.styled";

import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { FormEvent, useState } from "react";

import { InputField } from "../../..";

import paymentFormSchema from "@/app/helpers/schemas/payment-form-schema";

interface CreditCardFormProps {
  installments: number;
  price: number;
}

export function CreditCardForm({ installments, price }: CreditCardFormProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { handleSubmit, register, formState } = useForm({
    resolver: zodResolver(paymentFormSchema),
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a payment confirmation
    setTimeout(() => {
      setLoading(false);
      router.push("/payment/success");
    }, 2000);
  };

  return (
    <CreditCardFormWrapper onSubmit={onSubmit}>
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
          <CreditCardButton type="submit" disabled={loading}>
            {loading ? "Confirmando..." : "Pagar"}
          </CreditCardButton>
        </Grid>
      </Grid>
    </CreditCardFormWrapper>
  );
}
