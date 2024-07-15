"use client";

import QRCode from "react-qr-code";

import {
  PixPaymentCopybutton,
  PixPaymentQrcodeWrapper,
  PixPaymentWrapper,
} from "./pix-payment.styled";

import { Copy } from "lucide-react";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { usePaymentIdStore } from "@/app/stores/usePaymentIdStore";
import { usePaymentOptionStore } from "@/app/stores/usePaymentOptionStore";

import ioClient from "@/app/sockets/io-client";

const WEBSOCKET_URL = process.env.NEXT_PUBLIC_WEBSOCKET_URL as string;

export function PixPayment() {
  const router = useRouter();

  const paymentId = usePaymentIdStore((state) => state.id);
  const paymentOption = usePaymentOptionStore((state) => state.option);

  const [copyButtonDisabled, setCopyButtonDisabled] = useState(false);
  const [copyButtonMessage, setCopyButtonMessage] = useState(
    "Clique para copiar o QR CODE"
  );

  const paymentPixUrl = `${WEBSOCKET_URL}/payment/${paymentId}`;

  const copyPixUrl = (url: string) => {
    navigator.clipboard.writeText(url);

    setCopyButtonMessage("QR CODE copiado!");
    setCopyButtonDisabled(true);

    setTimeout(() => {
      setCopyButtonMessage("Clique para copiar o QR CODE");
      setCopyButtonDisabled(false);
    }, 1000);
  };

  ioClient.on("payment-success", (receivedPaymentId) => {
    if (receivedPaymentId === paymentId) {
      if (paymentOption?.installments === 1) router.push("/payment/success");
      else router.push("/payment/credit-card");
    }
  });

  return (
    <PixPaymentWrapper>
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
    </PixPaymentWrapper>
  );
}
