"use client";

import { Grid, MenuItem, TextField } from "@mui/material";

import {
  CreditCardPaymentFormWrapper,
  SubmitButton,
} from "./creditcard-payment-form.styled";

import formatCurrency from "@/app/utils/formatCurrency";

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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField variant="outlined" label="Nome completo" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField variant="outlined" label="CPF" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField variant="outlined" label="Número do cartão" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField variant="outlined" label="Vencimento" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField variant="outlined" label="CVV" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Parcelas"
            value={installments - 1}
            select
            fullWidth
          >
            <MenuItem value={installments - 1}>
              {installments - 1}x de {formatCurrency(price / installments)}
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <SubmitButton type="submit">Pagar</SubmitButton>
        </Grid>
      </Grid>
    </CreditCardPaymentFormWrapper>
  );
}
