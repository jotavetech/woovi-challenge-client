"use client";

import Image from "next/image";

import { StyledFooter } from "./footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Image
        src="/WooviSecurePayment.svg"
        alt="Payment 100% secure via Woovi"
        width={270}
        height={22}
      />
    </StyledFooter>
  );
}
