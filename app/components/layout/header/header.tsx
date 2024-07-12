"use client";

import Image from "next/image";

import { StyledHeader } from "./header.styled";
import Link from "next/link";

export default function Header() {
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
