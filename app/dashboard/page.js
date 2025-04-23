import React, { Suspense } from "react";
import TransactionList from "./components/TransactionList";
import TransactionListFallback from "./components/TransactionListFallback";

const DashBoardHomePage = () => {
  return (
    <div>
      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>
    </div>
  );
};

export default DashBoardHomePage;
