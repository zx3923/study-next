import styles from "../styles/container.module.css";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <div className={styles.box}>{children}</div>
    </div>
  );
}
