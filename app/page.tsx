"use client";

import { Title, PaymentMethodList } from "./components";

import paymentOptionsData from "./data/payment-options.json";

export default function Home() {
  return (
    <main>
      <Title>João, como você quer pagar?</Title>
      <PaymentMethodList paymentOptions={paymentOptionsData} />
    </main>
  );
}
