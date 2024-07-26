import styles from "../styles/listDetail.module.css";

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
      <div>
        <img className={styles.img} src={bookImg} />
        <div>
          <span>{title}</span>
          <span>{author}</span>
        </div>
      </div>
    </>
  );
}
