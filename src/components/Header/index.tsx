import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles["nav-div"]}>
      <Link to="/">
        <span>
          I <span className={styles["coracao"]}>♥</span> CRAQUE NETO
        </span>
      </Link>

      <nav>
        <Link to="/">
          <a href="">Home</a>
        </Link>

        <Link to="/watch">
          <a href="">Filmes</a>
        </Link>

        <Link to="/search">
          <a href="">Pesquisar</a>
        </Link>
      </nav>
    </header>
  );
}
