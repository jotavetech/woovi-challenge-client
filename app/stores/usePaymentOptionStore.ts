import { create } from "zustand";

import { PaymentOptionType } from "../types";

interface PaymentOptionStore {
  option: PaymentOptionType | null;
  setOption: (option: PaymentOptionType) => void;
}

export const usePaymentOptionStore = create<PaymentOptionStore>((set) => ({
  option: null,
  setOption: (option) => set({ option }),
}));
