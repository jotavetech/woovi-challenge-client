"use client";

import { Grid } from "@mui/material";

import { CreditCardFormWrapper } from "./creditcard-form.styled";

import { CreditCardField } from "../creditcard-field/creditcard-field";

import { FieldValues, FormState, UseFormRegister } from "react-hook-form";

import { FormEvent } from "react";
import { CreditCardButton } from "../creditcard-button/creditcard-button";
import { CreditCardSelect } from "../creditcard-select/creditcard-select";

interface CreditCardFormProps {
  installments: number;
  loading: boolean;
  price: number;
  onSubmit: (e: FormEvent) => void;
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
}

export function CreditCardForm({
  installments,
  loading,
  price,
  onSubmit,
  register,
  formState,
}: CreditCardFormProps) {
  return (
    <CreditCardFormWrapper onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <CreditCardField
          name="cardHolder"
          label="Nome completo"
          gridExtends="full"
          formState={formState}
          register={register}
        />
        <CreditCardField
          name="cpf"
          label="CPF"
          gridExtends="full"
          formState={formState}
          register={register}
        />
        <CreditCardField
          name="cardNumber"
          label="Número do cartão"
          formState={formState}
          register={register}
        />
        <CreditCardField
          name="expirationDate"
          label="Vencimento"
          gridExtends="half"
          formState={formState}
          register={register}
        />
        <CreditCardField
          name="cvv"
          label="CVV"
          gridExtends="half"
          formState={formState}
          register={register}
        />
        <CreditCardSelect installments={installments} price={price} />
        <CreditCardButton loading={loading} />
      </Grid>
    </CreditCardFormWrapper>
  );
}
