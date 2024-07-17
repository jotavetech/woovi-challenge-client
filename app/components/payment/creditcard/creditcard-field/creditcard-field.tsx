"use client";

import { Grid, TextField } from "@mui/material";

import { FieldValues, FormState, UseFormRegister } from "react-hook-form";

import normalize from "@/app/helpers/normalizers/normalize";

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
