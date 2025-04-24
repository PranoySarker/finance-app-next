import React, { Suspense } from "react";
import TransactionList from "./components/TransactionList";
import TransactionListFallback from "./components/TransactionListFallback";
import TrendDashboad from "./components/TrendDashboad";
import TrendFallback from "./components/TrendFallback";

const DashBoardHomePage = () => {
  return (
    <>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Suspense fallback={<TrendFallback />}>
          <TrendDashboad type="Income" />
        </Suspense>
        <Suspense fallback={<TrendFallback />}>
          <TrendDashboad type="Expense" />
        </Suspense>
        <Suspense fallback={<TrendFallback />}>
          <TrendDashboad type="Investment" />
        </Suspense>
        <Suspense fallback={<TrendFallback />}>
          <TrendDashboad type="Saving" />
        </Suspense>
      </section>
      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>
    </>
  );
};

export default DashBoardHomePage;
