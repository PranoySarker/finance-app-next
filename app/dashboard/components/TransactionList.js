import TransactionItem from "@/components/TransactionItem";
import TransactionSummary from "@/components/TransactionSummary";
import React from "react";

const groupAndSumTransactionsByDate = (transactions) => {
  const grouped = {};
  for (const transaction of transactions) {
    const date = transaction.created_at.split("T")[0];
    if (!grouped[date]) {
      grouped[date] = { transaction: [], amount: 0 };
    }
    grouped[date].transaction.push(transaction);
    const amount =
      transaction.type === "expense" ? -transaction.amount : transaction.amount;
    grouped[date].amount += amount;
  }
  return grouped;
};

const TransactionList = async () => {
  const response = await fetch(`${process.env.API_URL}/transactions`, {
    next: {
      tags: ["TransactionList"],
    },
  });
  const transactions = await response.json();
  const groupedTransactions = groupAndSumTransactionsByDate(transactions);

  return (
    <div className="space-y-10">
      {Object.entries(groupedTransactions).map(
        ([date, { transaction, amount }]) => (
          <div key={date}>
            <TransactionSummary date={date} amount={amount} />
            <hr className="my-4 border-gray-200 dark:border-gray-800" />
            <section className="space-y-4">
              {transaction.map((txn) => (
                <div key={txn.id}>
                  <TransactionItem
                    type={txn.type}
                    category={txn.category}
                    description={txn.description}
                    amount={txn.amount}
                  />
                </div>
              ))}
            </section>
          </div>
        )
      )}
    </div>
  );
};

export default TransactionList;
