"use client";

import { Grid, TextField } from "@mui/material";

import { FieldValues, FormState, UseFormRegister } from "react-hook-form";

import expirationDateNormalizer from "@/app/helpers/normalizers/expiration-date-normalizer";
import ccNumberNormalizer from "@/app/helpers/normalizers/cc-number-normalizer";
import cpfNormalizer from "@/app/helpers/normalizers/cpf-normalizer";

interface CreditCardFieldProps {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  gridExtends?: "full" | "half";
  label: string;
  name: string;
  maxLength?: number;
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
  const error = hasError ? String(errors[name]?.message) : "";

  function normalize(type: string, value: string) {
    if (type === "cardNumber") return ccNumberNormalizer(value);
    if (type === "expirationDate") return expirationDateNormalizer(value);
    if (type === "cpf") return cpfNormalizer(value);
    return value;
  }

  return (
    <Grid item xs={gridExtends === "full" ? 12 : 6}>
      <TextField
        {...register(name)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const { value } = e.target;
          e.target.value = normalize(name, value);
        }}
        fullWidth
        label={label}
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
