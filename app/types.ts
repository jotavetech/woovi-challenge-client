import paymentOptionsData from "@/app/data/payment-options.json";

export type PaymentOptionType = (typeof paymentOptionsData)[0];

export type PaymentOptionsType = PaymentOptionType[];
