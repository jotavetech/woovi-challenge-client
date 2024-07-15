import { z } from "zod";

import validateCPF from "../validators/validate-cpf";
import validateCCNumber from "../validators/validate-cc-number";
import validateExpirationDate from "../validators/validate-expiration-date";

const paymentFormSchema = z.object({
  cardHolder: z
    .string()
    .min(3, { message: "O nome precisa conter mais de 4 caracteres." }),

  cpf: z.string().refine(validateCPF, {
    message: "CPF inválido.",
  }),

  cardNumber: z.string().refine(validateCCNumber, {
    message: "Número de cartão inválido.",
  }),

  expirationDate: z.string().refine(validateExpirationDate, {
    message: "Data de expiração inválida.",
  }),

  cvv: z.string().length(3, {
    message: "O CVV precisa conter 3 caracteres numerais.",
  }),
});

export default paymentFormSchema;
