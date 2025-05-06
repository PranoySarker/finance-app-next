import BaseTrend from "@/components/Trend";
import { createClient } from "@/lib/supabase/server";

export default async function Trend({ type }) {
  const responst = await fetch(`${process.env.API_URL}/trends/${type}`);
  const { amount, prevAmount } = await responst.json();

  return <BaseTrend type={type} amount={amount} prevAmount={prevAmount} />;
}
