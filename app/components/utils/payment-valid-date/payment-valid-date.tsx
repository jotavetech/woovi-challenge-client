"use client";

import { PaymentValidDateWrapper } from "./payment-valid-date.styled";

export function PaymentValidDate() {
  return (
    <PaymentValidDateWrapper>
      <span>Prazo de pagamento:</span>
      <p>25/07/2024 - 08:00</p>
    </PaymentValidDateWrapper>
  );
}
