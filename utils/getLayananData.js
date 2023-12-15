export const getLayananData = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categoryLayanan`
  );
  const data = await response.json();
  return data;
};
