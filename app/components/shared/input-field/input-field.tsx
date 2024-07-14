"use client";

import { Grid, TextField } from "@mui/material";

import { FieldValues, FormState, UseFormRegister } from "react-hook-form";

import { InputFieldErrorMessage } from "./input-field.styled";

interface InputFieldProps {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  gridExtends?: "full" | "half";
  label: string;
  name: string;
}

export function InputField({
  register,
  formState,
  gridExtends = "full",
  label,
  name,
}: InputFieldProps) {
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
      />
    </Grid>
  );
}