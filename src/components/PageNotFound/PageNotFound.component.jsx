import styles from "./PageNotFound.module.css";
export const PageNotFound = () => {
  return (
    <section className={styles.container}>
      <h1>404</h1>
      <p className={styles.text}>Wszystkie koty uciekły...</p>
    </section>
  );
};
