const getTimeLinesFromLocalDB = () => {
  const timeLines = localStorage.getItem("timeLine");
  if (timeLines) return JSON.parse(timeLines);
  return [];
};

const addTimeLineToLocalDB = (tl) => {
  const timeLines = getTimeLinesFromLocalDB();
  timeLines.push(tl);
  localStorage.setItem("timeLine", JSON.stringify(timeLines));
};

export { addTimeLineToLocalDB, getTimeLinesFromLocalDB };
