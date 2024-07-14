"use client";

import Image from "next/image";

import { AnimatedConfirmationWrapper } from "./animated-confirmation.styled";

export function AnimatedConfirmation() {
  return (
    <AnimatedConfirmationWrapper>
      <Image
        src="/confirmation.gif"
        width={150}
        height={150}
        alt="An animated gif for confirm the payment."
      />
    </AnimatedConfirmationWrapper>
  );
}
