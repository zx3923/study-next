import Item from "../components/item";
import styles from "../styles/home.module.css";
import { API_URL } from "../constants";

// const API_KEY = process.env.API_KEY;

async function getBestSellers() {
  const response = await fetch(`${API_URL}s`);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const sellers = await getBestSellers();
  return (
    <>
      <h1 className={styles.h1}>The New York Times Best Seller Explorer</h1>
      <div className={styles.container}>
        {sellers.results.map((item: any) => (
          <Item
            key={item.list_name}
            title={item.list_name}
            listName={item.list_name_encoded}
          />
        ))}
      </div>
    </>
  );
}
