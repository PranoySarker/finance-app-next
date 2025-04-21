import useFormateCurrency from "@/hooks/useFormateCurrency";
import React from "react";

const TransactionSummary = ({ date, amount }) => {
  const formattedAmount = useFormateCurrency(amount);
  return (
    <div className="flex text-gray-500 dark:text-gray-400 font-semibold">
      <div className="grow">{date}</div>

      <div className="min-w-[70px] font-semibold">{formattedAmount}</div>

      <div className="min-w-[50px]"></div>
    </div>
  );
};

export default TransactionSummary;
