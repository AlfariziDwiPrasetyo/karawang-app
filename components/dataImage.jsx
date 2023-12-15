"use server";

const dataImage = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const data = await response.json();
  return data;
};

export default dataImage;
