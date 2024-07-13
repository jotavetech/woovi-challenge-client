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

  const installmentsArray = Array.from(
    { length: installments },
    (_, index) => index
  );

  return (
    <InstallmentListWrapper>
      {installmentsArray.map((installment) => (
        <InstallmentListItem
          key={installment}
          installment={installment + 1}
          active={installment + 1 === phase}
          paid={installment + 1 < phase}
          price={installmentPrice}
        />
      ))}
    </InstallmentListWrapper>
  );
}
