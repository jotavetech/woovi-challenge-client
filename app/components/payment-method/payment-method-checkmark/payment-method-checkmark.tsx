import { Check } from "lucide-react";
import { StyledPaymentMethodCheckmark } from "./payment-method-checkmark.styled";

interface PaymentMethodCheckmarkProps {
  isActivated?: boolean;
}

export function PaymentMethodCheckmark({
  isActivated,
}: PaymentMethodCheckmarkProps) {
  return (
    <StyledPaymentMethodCheckmark isActivated={isActivated}>
      {isActivated && (
        <Check style={{ color: "#fff", width: "12px", height: "12px" }} />
      )}
    </StyledPaymentMethodCheckmark>
  );
}
