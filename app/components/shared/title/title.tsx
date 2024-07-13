"use client";

import React from "react";

import { TitleWrapper } from "./title.styled";

interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return <TitleWrapper>{children}</TitleWrapper>;
}
