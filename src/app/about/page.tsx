import styles from "../styles/about.module.css";

export default function About() {
  return (
    <>
      <h1 className={styles.h1}>About us</h1>
      <div className={styles.div}>
        <span>
          Welcome to the officail explorer for The New York Times Best Seller
          list explorer.
        </span>
        <span>We hope you enjoy your stay!</span>
      </div>
    </>
  );
}
