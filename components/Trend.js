import React, { useMemo } from "react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import useFormateCurrency from "@/hooks/useFormateCurrency";

const Trend = ({ type, amount, prevAmount }) => {
  const colorClasses = {
    Income: "text-green-700 dark:text-green-300",
    Expense: "text-red-700 dark:text-red-300",
    Investment: "text-indigo-700 dark:text-indigo-300",
    Saving: "text-yellow-700 dark:text-yellow-300",
  };

  const calcPercentageChange = (amount, prevAmount) => {
    if (!prevAmount || !amount) return 0; // Avoid division by zero
    return ((amount - prevAmount) / prevAmount) * 100;
  };

  const percentageChange = useMemo(
    () => calcPercentageChange(amount, prevAmount).toFixed(0),
    [amount, prevAmount]
  );

  const formattedAmount = useFormateCurrency(amount);

  return (
    <div>
      <div className={`font-semibold ${colorClasses[type]}`}>{type}</div>
      <div className="text-2xl font-semibold text-black dark:text-white mb-2">
        {formattedAmount}
      </div>
      <div className="flex space-x-1 items-center text-sm">
        {percentageChange <= 0 && (
          <ArrowDownLeft className="text-red-700 dark:text-red-300" />
        )}
        {percentageChange > 0 && (
          <ArrowUpRight className="text-green-700 dark:text-green-300" />
        )}
        <div>{percentageChange}% vs last period</div>
      </div>
    </div>
  );
};

export default Trend;
