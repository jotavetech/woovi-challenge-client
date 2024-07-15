"use client";

import { usePaymentIdStore } from "@/app/stores/usePaymentIdStore";

import {
  IdentifierID,
  IdentifierTitle,
  IdentifierWrapper,
} from "./identifier.styled";

export function Identifier() {
  const paymentId = usePaymentIdStore((state) => state.id);

  return (
    <IdentifierWrapper>
      <IdentifierTitle>Identificador:</IdentifierTitle>
      <IdentifierID>{paymentId}</IdentifierID>
    </IdentifierWrapper>
  );
}
