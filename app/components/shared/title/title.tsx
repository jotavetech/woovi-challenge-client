"use client";

import React from "react";

import { StyledTitle } from "./title.styled";

interface TitleProps {
  children: React.ReactNode;
}

export function Title({ children }: TitleProps) {
  return <StyledTitle>{children}</StyledTitle>;
}
