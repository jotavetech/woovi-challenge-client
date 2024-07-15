"use client";

import { Identifier } from "@/app/components";

import { usePaymentIdStore } from "@/app/stores/usePaymentIdStore";
import { usePaymentOptionStore } from "@/app/stores/usePaymentOptionStore";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface PaymentLayoutProps {
  children: React.ReactNode;
}

export default function PaymentLayout({ children }: PaymentLayoutProps) {
  const router = useRouter();

  const paymentId = usePaymentIdStore((state) => state.id);
  const paymentOption = usePaymentOptionStore((state) => state.option);

  useEffect(() => {
    if (!paymentId || !paymentOption) router.push("/");
  }, [router, paymentId, paymentOption]);

  if (!paymentId) return null;

  return (
    <main>
      {children}
      <Identifier />
    </main>
  );
}
