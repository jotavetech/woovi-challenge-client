"use client";

import { InstallmentListItem } from "../installment-list-item/installment-list-item";

import { InstallmentListWrapper } from "./installment-list.styled";

interface InstallmentListProps {
  installments: number;
  phase: number;
  price: number;
}

export function InstallmentList({
  installments,
  phase,
  price,
}: InstallmentListProps) {
  const installmentPrice = price / installments;

  // Used to map all the possibilities dinamically
  const installmentsLength = Array.from(
    { length: installments },
    (_, i) => i + 1
  );

  return (
    <InstallmentListWrapper>
      {installmentsLength.map((installment) => (
        <InstallmentListItem
          key={installment}
          installment={installment}
          active={installment === phase}
          paid={installment < phase}
          price={installmentPrice}
        />
      ))}
    </InstallmentListWrapper>
  );
}
