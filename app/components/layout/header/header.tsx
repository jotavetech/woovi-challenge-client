"use client";

import Link from "next/link";
import Image from "next/image";

import { StyledHeader } from "./header.styled";

export function Header() {
  return (
    <StyledHeader>
      <Link href="/">
        <Image
          src="/WooviLogo.svg"
          alt="Woovi Logo, a green Woovi text"
          width={123}
          height={36}
        />
      </Link>
    </StyledHeader>
  );
}
