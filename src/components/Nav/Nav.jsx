import { Link } from 'react-router-dom';
import styles from "./Nav.module.css"

export default function Nav() {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
        <li>
          <Link to="/episodes">Episodes</Link>
        </li>
      </ul>
    </nav>
  );
}