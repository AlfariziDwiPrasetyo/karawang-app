"use server";
import Card from "./Card";

const getData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`);
  const data = await response.json();
  return data.data.map((item, key) => (
    <Card
      key={key}
      image={item.url}
      title={item.title}
      content={item.content}
      id={item.id}
    />
  ));
};

export default getData;
