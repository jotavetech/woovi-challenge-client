import { create } from "zustand";

interface PaymentIdStore {
  id: string;
  setId: (id: string) => void;
}

export const usePaymentIdStore = create<PaymentIdStore>((set) => ({
  id: "",
  setId: (id) => set({ id }),
}));
