"use client";

import { TextField } from "@mui/material";
import { CreditCardPaymentFormWrapper } from "./creditcard-payment-form.styled";

interface CreditCardPaymentFormProps {
  installments: number;
  price: number;
}

export function CreditCardPaymentForm({
  installments,
  price,
}: CreditCardPaymentFormProps) {
  return (
    <CreditCardPaymentFormWrapper>
      <TextField variant="outlined" label="Nome completo" />
      <TextField variant="outlined" label="CPF" />
      <TextField variant="outlined" label="Número do cartão" />
      <TextField variant="outlined" label="Vencimento" />
      <TextField variant="outlined" label="CVV" />
    </CreditCardPaymentFormWrapper>
  );
}
