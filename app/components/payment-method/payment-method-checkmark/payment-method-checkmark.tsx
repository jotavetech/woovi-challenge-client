import { Check } from "lucide-react";
import { PaymentMethodCheckmarkWrapper } from "./payment-method-checkmark.styled";

interface PaymentMethodCheckmarkProps {
  isActivated?: boolean;
}

export function PaymentMethodCheckmark({
  isActivated,
}: PaymentMethodCheckmarkProps) {
  return (
    <PaymentMethodCheckmarkWrapper isActivated={isActivated}>
      {isActivated && (
        <Check style={{ color: "#fff", width: "12px", height: "12px" }} />
      )}
    </PaymentMethodCheckmarkWrapper>
  );
}
