"use client";

import { Title } from "../..";

import { ContainerWrapper } from "./container.styled";

interface ContainerProps {
  children: React.ReactNode;
  title?: string;
}

export function Container({ children, title }: ContainerProps) {
  return (
    <ContainerWrapper>
      {title && <Title>{title}</Title>}
      {children}
    </ContainerWrapper>
  );
}
