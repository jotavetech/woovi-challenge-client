"use client";

import { PaymentMethodList, Container } from "../components";

import paymentOptionsData from "../data/payment-options.json";

export default function Home() {
  return (
    <main>
      <Container title="João, como você quer pagar?">
        <PaymentMethodList paymentOptions={paymentOptionsData} />
      </Container>
    </main>
  );
}
