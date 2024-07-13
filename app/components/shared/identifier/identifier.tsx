"use client";

import {
  IdentifierID,
  IdentifierTitle,
  IdentifierWrapper,
} from "./identifier.styled";

interface IdentifierProps {
  id: string;
}

export function Identifier({ id }: IdentifierProps) {
  return (
    <IdentifierWrapper>
      <IdentifierTitle>Identificador:</IdentifierTitle>
      <IdentifierID>{id}</IdentifierID>
    </IdentifierWrapper>
  );
}
