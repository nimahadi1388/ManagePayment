import { createContext } from "react";

export const PaymentItemsContext = createContext({
  paymentItems: [],
  setPaymentItems: () => {},
  account: [],
  setAccount: () => {},
});
