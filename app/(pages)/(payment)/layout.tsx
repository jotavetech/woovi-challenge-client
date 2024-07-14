import { Identifier } from "@/app/components";

import uniqid from "uniqid";

interface PaymentLayoutProps {
  children: React.ReactNode;
}

const id = uniqid();

export default function PaymentLayout({ children }: PaymentLayoutProps) {
  return (
    <main>
      {children}
      <Identifier id={id} />
    </main>
  );
}
