"use server";
import Card from "./Card";

const getData = async () => {
  const response = await fetch(`http://localhost:3000/api/news`);
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
