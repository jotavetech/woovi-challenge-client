"use client";

import QRCode from "react-qr-code";

import {
  PixPaymentCopybutton,
  PixPaymentQrcodeWrapper,
  PixPaymentSectionWrapper,
} from "./pix-payment-section.styled";

import { Copy } from "lucide-react";

import { useState } from "react";

interface PixPaymentSectionProps {
  installments: number;
}

export function PixPaymentSection({ installments }: PixPaymentSectionProps) {
  const [copyButtonDisabled, setCopyButtonDisabled] = useState(false);
  const [copyButtonMessage, setCopyButtonMessage] = useState(
    "Clique para copiar o QRCODE"
  );

  const paymentPixUrl = `https://pix.example.com/${installments}`;

  const copyPixUrl = (url: string) => {
    navigator.clipboard.writeText(url);

    setCopyButtonMessage("QRCODE copiado!");
    setCopyButtonDisabled(true);

    setTimeout(() => {
      setCopyButtonMessage("Clique para copiar o QRCODE");
      setCopyButtonDisabled(false);
    }, 3000);
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
