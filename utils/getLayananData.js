export const getLayananData = async () => {
  const response = await fetch("http://localhost:3000/api/categoryLayanan");
  const data = await response.json();
  console.log(data);
  return data;
};
