import React, { Suspense } from "react";
import TransactionList from "./components/TransactionList";
import TransactionListFallback from "./components/TransactionListFallback";
import TrendDashboad from "./components/TrendDashboad";
import TrendFallback from "./components/TrendFallback";
import Link from "next/link";
import { PlusCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

const DashBoardHomePage = async () => {
  const client = await createClient();
  console.log(await client.from("transactions").select());
  return (
    <>
      <section className="mb-8">
        <h1 className="text-4xl font-semibold ">Summary</h1>
      </section>

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

      <section className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Transactions</h2>
        <Link href="/dashboard/transaction/add" className={`flex items-center`}>
          <PlusCircle className="w-4 h-4" />
          <span className="ml-2">Add</span>
        </Link>
      </section>
      <Suspense fallback={<TransactionListFallback />}>
        <TransactionList />
      </Suspense>
    </>
  );
};

export default DashBoardHomePage;
