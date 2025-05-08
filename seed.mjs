import dotenv from "dotenv";
import { createClient } from "@supabase/supabase-js";
import { faker } from "@faker-js/faker";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE
);

const categories = [
  "Housing",
  "Transport",
  "Health",
  "Food",
  "Education",
  "Other",
];

async function seed() {
  let transactions = [];

  for (let i = 0; i < 10; i++) {
    const created_at = faker.date.past();

    let type,
      category = null;

    const typeBias = Math.random();

    if (typeBias < 0.85) {
      type = "Expense";
      category = faker.helpers.arrayElement(categories);
    } else if (typeBias < 0.9) {
      type = "Income";
    } else {
      type = faker.helpers.arrayElement(["Investment", "Saving"]);
    }

    let amount;
    switch (type) {
      case "Income":
        amount = faker.number.int({ min: 2000, max: 10000 });
        break;
      case "Expense":
        amount = faker.number.int({ min: 100, max: 2000 });
        break;
      case "Investment":
      case "Saving":
        amount = faker.number.int({ min: 1000, max: 5000 });
        break;
    }

    transactions.push({
      type,
      category,
      description: faker.lorem.sentence(3),
      amount,
      created_at,
    });
  }

  const { error } = await supabase.from("transactions").insert(transactions);

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Data inserted successfully!");
  }
}

seed().catch(console.error);
