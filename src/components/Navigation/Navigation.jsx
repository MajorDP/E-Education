import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={styles.container}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/guides">Guides</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
