const timestampToHour = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const time = `${hour}:${minutes}`;
  return time;
};

export default timestampToHour;