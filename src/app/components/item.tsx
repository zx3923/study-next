import Link from "next/link";
import styles from "../styles/item.module.css";

interface ISellerProps {
  title: string;
  listName: string;
}

export default function Item({ title, listName }: ISellerProps) {
  return (
    <div className={styles.div}>
      <Link href={`/list/${listName}`}>{title}</Link>
    </div>
  );
}
