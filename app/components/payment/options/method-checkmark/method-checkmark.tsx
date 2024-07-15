import { Check } from "lucide-react";

import { MethodCheckmarkWrapper } from "./method-checkmark.styled";

interface MethodCheckmarkProps {
  isActivated?: boolean;
}

export function MethodCheckmark({ isActivated }: MethodCheckmarkProps) {
  return (
    <MethodCheckmarkWrapper $isActivated={isActivated}>
      {isActivated && (
        <Check style={{ color: "#fff", width: "12px", height: "12px" }} />
      )}
    </MethodCheckmarkWrapper>
  );
}
