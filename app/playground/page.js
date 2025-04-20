import PageHeader from "@/components/PageHeader";
import TransactionItem from "@/components/TransactionItem";
import Trend from "@/components/Trend";

const page = () => {
  return (
    <main className="space-y-8">
      <h1 className="text-4xl mt-8">Playground</h1>

      <div>
        <h2 className="mb-4 text-lg font-mono">PageHeader</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div>
          <PageHeader />
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="flex space-x-4">
          <Trend type="Income" amount={1000} prevAmount={1200} />
          <Trend type="Expense" amount={1200} prevAmount={1500} />
          <Trend type="Investment" amount={1500} prevAmount={1300} />
          <Trend type="Saving" amount={800} prevAmount={1200} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Transaction Item</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="space-y-4">
          <TransactionItem type="Income" description="Salary" amount={1000} />
          <TransactionItem
            type="Expense"
            description="Groceries"
            amount={200}
          />
          <TransactionItem
            type="Investment"
            description="Stocks"
            amount={300}
          />
          <TransactionItem
            type="Saving"
            description="Emergency Fund"
            amount={500}
          />
        </div>
      </div>
    </main>
  );
};

export default page;
