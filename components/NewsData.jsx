"use server";
import Card from "./Card";

const getData = async () => {
  const response = await fetch(`http://localhost:3000/api/news`);
  const data = await response.json();
  return data.data.map((item, id) => {
    return (
      <Card
        key={id}
        image={item.url}
        content={item.content}
        title={item.title}
      />
    );
  });
};

export default getData;
