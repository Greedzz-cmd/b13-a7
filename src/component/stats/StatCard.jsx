const StatCard = ({ label, value }) => {
  return (
    <div className="card bg-white shadow-sm px-8 py-9">
      <h3 className="text-3xl font-semibold text-success-content">{value}</h3>
      <p className="text-lg text-slate-500">{label}</p>
    </div>
  );
};

export default StatCard;
