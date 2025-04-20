import { useMemo } from "react";

const useFormateCurrency = (amount) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BDT",
    }).format(amount);
  };
  return useMemo(() => {
    return formatCurrency(amount);
  }, [amount]);
};

export default useFormateCurrency;
