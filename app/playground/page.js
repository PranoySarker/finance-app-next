import PageHeader from "@/components/PageHeader";
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
          <Trend type="Savings" amount={800} prevAmount={1200} />
        </div>
      </div>
    </main>
  );
};

export default page;
