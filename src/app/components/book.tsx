import Link from "next/link";
import styles from "../styles/bookDetail.module.css";

interface IBookProps {
  bookImg: string;
  amazonUrl: string;
  title: string;
  author: string;
}

export default function Book({
  bookImg,
  amazonUrl,
  title,
  author,
}: IBookProps) {
  return (
    <>
      <div className={styles.bookBox}>
        <div className={styles.imgBox}>
          <img className={styles.img} src={bookImg} />
        </div>
        <div className={styles.titleBox}>
          <span>{title}</span>
          <span>{author}</span>
        </div>
        <div className={styles.btnBox}>
          <button>
            <Link href={amazonUrl}>Buy now</Link>
          </button>
        </div>
      </div>
    </>
  );
}
