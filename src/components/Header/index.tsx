import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles["nav-div"]}>
      <span>
        I <span className={styles["coracao"]}>♥</span> CRAQUE NETO
      </span>
      <nav>
        <a href="">Home</a>
        <a href="">Filmes</a>
      </nav>
    </header>
  );
}
