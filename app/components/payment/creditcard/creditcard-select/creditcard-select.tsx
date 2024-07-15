"use client";

import formatCurrency from "@/app/utils/format-currency";
import { Grid, MenuItem, TextField } from "@mui/material";

interface CreditCardSelectProps {
  installments: number;
  price: number;
}

export function CreditCardSelect({
  installments,
  price,
}: CreditCardSelectProps) {
  const reducedInstallments = installments - 1;

  return (
    <Grid item xs={12}>
      <TextField value={reducedInstallments} fullWidth label="Parcelas" select>
        <MenuItem value={reducedInstallments}>
          {reducedInstallments}x de {formatCurrency(price / installments)}
        </MenuItem>
      </TextField>
    </Grid>
  );
}
