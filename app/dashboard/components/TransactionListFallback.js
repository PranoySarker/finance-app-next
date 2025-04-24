import Skeleton from "@/components/Skeleton";
import React from "react";

const TransactionListFallback = () => {
  return (
    <div className="space-y-10">
      <TransactionItemSkeleton />
      <TransactionItemSkeleton />
      <TransactionItemSkeleton />
      <TransactionItemSkeleton />
    </div>
  );
};

export default TransactionListFallback;

function TransactionItemSkeleton() {
  return (
    <div className="w-full flex items-center">
      <div className="flex items-center mr-4 grow">
        <Skeleton />
      </div>

      <div className="min-w-[150px] items-center hidden md:flex">
        <Skeleton />
      </div>

      <div className="min-w-[70px] text-right">
        <Skeleton />
      </div>

      <div className="min-w-[100px] flex justify-end">
        <Skeleton />
      </div>
    </div>
  );
}
