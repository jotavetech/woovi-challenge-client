import { Check } from "lucide-react";
import {
  InstallmentCheckmark,
  InstallmentListDetail,
  InstallmentListItemWrapper,
} from "./installment-list-item.styled";

import formatCurrency from "@/app/utils/formatCurrency";

interface InstallmentListItemProps {
  active: boolean;
  paid: boolean;
  installment: number;
  price: number;
}

export function InstallmentListItem({
  active,
  paid,
  installment,
  price,
}: InstallmentListItemProps) {
  return (
    <InstallmentListItemWrapper>
      <InstallmentListDetail>
        <InstallmentCheckmark $isActive={active} $isPaid={paid}>
          {paid && <Check />}
        </InstallmentCheckmark>
        {installment}
        {installment === 1 ? "ª entrada no Pix" : "ª no cartão"}
      </InstallmentListDetail>

      <InstallmentListDetail>
        <b>{formatCurrency(price)}</b>
      </InstallmentListDetail>
    </InstallmentListItemWrapper>
  );
}
