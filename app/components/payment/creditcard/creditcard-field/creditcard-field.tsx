"use client";

import { Grid, TextField } from "@mui/material";

import { FieldValues, FormState, UseFormRegister } from "react-hook-form";

interface CreditCardFieldProps {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  gridExtends?: "full" | "half";
  label: string;
  name: string;
}

export function CreditCardField({
  register,
  formState,
  gridExtends = "full",
  label,
  name,
}: CreditCardFieldProps) {
  const { errors } = formState;

  const hasError = !!(errors && errors[name]);
  const error = hasError ? String(errors[name]!.message) : "";

  return (
    <Grid item xs={gridExtends === "full" ? 12 : 6}>
      <TextField
        fullWidth
        label={label}
        {...register(name)}
        helperText={error}
        error={hasError}
        sx={{
          "& *": {
            borderRadius: "9px",
            fontWeight: 500,
            color: "#4D4D4D",
          },
        }}
      />
    </Grid>
  );
}
