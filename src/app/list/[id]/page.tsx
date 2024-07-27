import Book from "@/app/components/book";
import styles from "../../styles/listPage.module.css";
import { API_URL } from "@/app/constants";

async function getList(name: any) {
  const response = await fetch(`${API_URL}?name=${name}`);
  const json = await response.json();
  return json;
}

export default async function ListDetail(props: any) {
  const list = await getList(props.params.id);
  return (
    <>
      <h1 className={styles.h1}>{list.results.list_name}</h1>
      <div className={styles.container}>
        {list.results.books.map((book: any) => (
          <Book
            key={book.rank}
            bookImg={book.book_image}
            amazonUrl={book.amazon_product_url}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
    </>
  );
}
