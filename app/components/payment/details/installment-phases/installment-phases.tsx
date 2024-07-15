"use client";

import { InstallmentPhaseItem } from "../installment-phase-item/installment-phase-item";

import { InstallmentPhasesWrapper } from "./installment-phases.styled";

interface InstallmentPhasesProps {
  installments: number;
  phase: number;
  price: number;
}

export function InstallmentPhases({
  installments,
  phase,
  price,
}: InstallmentPhasesProps) {
  const installmentPrice = price / installments;

  // Used to map all the possibilities dinamically
  const installmentsLength = Array.from(
    { length: installments },
    (_, i) => i + 1
  );

  return (
    <InstallmentPhasesWrapper>
      {installmentsLength.map((installment) => (
        <InstallmentPhaseItem
          key={installment}
          installment={installment}
          active={installment === phase}
          paid={installment < phase}
          price={installmentPrice}
        />
      ))}
    </InstallmentPhasesWrapper>
  );
}
