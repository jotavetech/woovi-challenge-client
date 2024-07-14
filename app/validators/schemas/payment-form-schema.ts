import { z } from "zod";

const paymentFormSchema = z.object({
  cardHolder: z
    .string()
    .min(3, { message: "O nome precisa conter mais de 3 caracteres." }),
  cpf: z.string().length(11, { message: "O CPF é inválido." }),
  cardNumber: z.string().length(16, {
    message: "Número inválido.",
  }),
  expirationDate: z.string().length(6, {
    message: "Data de vencimento inválida.",
  }),
  cvv: z.string().length(3, {
    message: "O CVV precisa conter 3 caracteres numerais.",
  }),
});

export default paymentFormSchema;
