import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import PageHeader from "@/components/PageHeader";
import Select from "@/components/Select";
import TransactionItem from "@/components/TransactionItem";
import TransactionSummary from "@/components/TransactionSummary";
import Trend from "@/components/Trend";

const page = () => {
  return (
    <main className="space-y-8 mb-44">
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

      <div>
        <h2 className="mb-4 text-lg font-mono">
          Transaction summary + Transaction Item
        </h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <TransactionSummary date="2025-01-01" amount={3500} />
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

      <div>
        <h2 className="mb-4 text-lg font-mono">Buttons</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="space-y-4">
          <Button>Hello</Button>
          <Button variants="outline">Hello</Button>
          <Button variants="ghost">Hello</Button>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">Forms</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800" />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label className="mb-2">Your Name</Label>
            <Input type="text" placeholder="Type your name..." />
          </div>

          <div>
            <Label className="mb-2">City</Label>
            <Select>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
              <option value="houston">Houston</option>
              <option value="miami">Miami</option>
            </Select>
          </div>

          <div className="flex items-center">
            <Input type="checkbox" id="terms" />
            <Label htmlFor="terms">Accept terms & conditions</Label>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
