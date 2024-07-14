"use client";

import { StatusWrapper, StatusIcon, StatusMessage } from "./status.styled";

import { Check, X } from "lucide-react";

interface StatusProps {
  type: "success" | "error";
  message?: string;
}

export function Status({ message, type }: StatusProps) {
  return (
    <StatusWrapper>
      <StatusIcon $type={type}>
        {type === "success" ? (
          <Check width={150} height={150} />
        ) : (
          <X width={150} height={150} />
        )}
      </StatusIcon>
      {message && <StatusMessage>{message}</StatusMessage>}
    </StatusWrapper>
  );
}
