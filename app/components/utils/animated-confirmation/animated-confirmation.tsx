"use client";

import {
  AnimatedConfirmationWrapper,
  AnimatedConfirmationIcon,
} from "./animated-confirmation.styled";

import { Check } from "lucide-react";

export function AnimatedConfirmation() {
  return (
    <AnimatedConfirmationWrapper>
      <AnimatedConfirmationIcon>
        <Check width={150} height={150} />
      </AnimatedConfirmationIcon>
    </AnimatedConfirmationWrapper>
  );
}
