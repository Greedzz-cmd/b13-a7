import StatisticCard from "@/component/statistics/StatisticCard";

const Page = () => {
  return (
    <div className="container mx-auto py-20">
      <h2 className="font-bold text-5xl mb-7">Friendship Analytics</h2>
      <div className="card bg-white shadow-sm p-8">
        <h3 className="text-success-content text-xl font-medium ">
          By Interaction Type
        </h3>
        <StatisticCard></StatisticCard>
      </div>
    </div>
  );
};

export default Page;
