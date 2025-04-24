import Trend from "@/components/Trend";

const TrendDashboad = async ({ type }) => {
  const response = await fetch(`http://localhost:3100/trends/${type}`);
  const { amount, prevAmount } = await response.json();

  return <Trend amount={amount} prevAmount={prevAmount} type={type} />;
};

export default TrendDashboad;
