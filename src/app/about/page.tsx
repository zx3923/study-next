import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>About us</h1>
        <div>
          <span>
            Welcome to the officail explorer for The New York Times Best Seller
            list explorer.
          </span>
          <span>We hope you enjoy your stay!</span>
        </div>
      </div>
    </div>
  );
}
