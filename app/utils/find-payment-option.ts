import paymentOptions from "@/app/data/payment-options.json";

export default function findPaymentOption(installmentNumber: string) {
  return paymentOptions.find(
    (option) => +option.installments === +installmentNumber
  );
}
