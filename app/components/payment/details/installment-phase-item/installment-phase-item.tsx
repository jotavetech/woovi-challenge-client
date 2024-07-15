import { Check } from "lucide-react";
import {
  InstallmentCheckmark,
  InstallmentPhaseDetail,
  InstallmentPhaseItemWrapper,
} from "./installment-phase-item.styled";

import formatCurrency from "@/app/utils/format-currency";

interface InstallmentPhaseItemProps {
  active: boolean;
  paid: boolean;
  installment: number;
  price: number;
}

export function InstallmentPhaseItem({
  active,
  paid,
  installment,
  price,
}: InstallmentPhaseItemProps) {
  return (
    <InstallmentPhaseItemWrapper>
      <InstallmentPhaseDetail>
        <InstallmentCheckmark $isActive={active} $isPaid={paid}>
          {paid && <Check />}
        </InstallmentCheckmark>
        {installment}
        {installment === 1 ? "ª entrada no Pix" : "ª no cartão"}
      </InstallmentPhaseDetail>

      <InstallmentPhaseDetail>
        <b>{formatCurrency(price)}</b>
      </InstallmentPhaseDetail>
    </InstallmentPhaseItemWrapper>
  );
}
