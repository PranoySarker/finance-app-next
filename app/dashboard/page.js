import React, { Suspense } from "react";
import TransactionList from "./components/TransactionList";
import TransactionListFallback from "./components/TransactionListFallback";
import TrendDashboad from "./components/TrendDashboad";

const DashBoardHomePage = () => {
  return (
    <>
      <section className="mb-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <Suspense>
          <TrendDashboad type="Income" />
        </Suspense>
        <Suspense>
          <TrendDashboad type="Expense" />
        </Suspense>
        <Suspense>
          <TrendDashboad type="Investment" />
        </Suspense>
        <Suspense>
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
