"use client";

import QRCode from "react-qr-code";

import {
  PixPaymentCopybutton,
  PixPaymentQrcodeWrapper,
  PixPaymentSectionWrapper,
} from "./pix-payment-section.styled";

import { Copy } from "lucide-react";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface PixPaymentSectionProps {
  paymentId: string;
}

export function PixPaymentSection({ paymentId }: PixPaymentSectionProps) {
  const router = useRouter();
  const [copyButtonDisabled, setCopyButtonDisabled] = useState(false);
  const [copyButtonMessage, setCopyButtonMessage] = useState(
    "Clique para copiar o QR CODE"
  );

  const paymentPixUrl = `https://woovi-server.vercel.app/pay/${paymentId}`;

  const copyPixUrl = (url: string) => {
    navigator.clipboard.writeText(url);

    setCopyButtonMessage("QR CODE copiado!");
    setCopyButtonDisabled(true);

    setTimeout(() => {
      setCopyButtonMessage("Clique para copiar o QR CODE");
      // simulate payment
      router.push("/creditcard-payment");
      setCopyButtonDisabled(false);
    }, 1000);
  };

  return (
    <PixPaymentSectionWrapper>
      <PixPaymentQrcodeWrapper>
        <QRCode value={paymentPixUrl} size={332} />
      </PixPaymentQrcodeWrapper>
      <PixPaymentCopybutton
        onClick={() => copyPixUrl(paymentPixUrl)}
        disabled={copyButtonDisabled}
      >
        {copyButtonMessage}
        <Copy />
      </PixPaymentCopybutton>
    </PixPaymentSectionWrapper>
  );
}
