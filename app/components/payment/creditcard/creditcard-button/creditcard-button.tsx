"use client";

import { Grid } from "@mui/material";

import { CreditCardButtonWrapper } from "./creditcard-button.styled";

interface CreditCardButtonProps {
  loading: boolean;
}

export function CreditCardButton({ loading }: CreditCardButtonProps) {
  return (
    <Grid item xs={12}>
      <CreditCardButtonWrapper type="submit" disabled={loading}>
        {loading ? "Confirmando..." : "Pagar"}
      </CreditCardButtonWrapper>
    </Grid>
  );
}
