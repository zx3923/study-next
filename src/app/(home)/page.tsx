import styles from "../styles/home.module.css";

const API_KEY = process.env.API_KEY;

async function getBestSellers() {
  const response = await fetch(`${API_KEY}`);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const sellers = await getBestSellers();
  console.log(sellers);
  return (
    <div>
      {sellers.results.map((item: any) => (
        <div key={item.list_name}>{item.list_name}</div>
      ))}
    </div>
  );
}
