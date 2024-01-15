import Image from "next/image";
import Link from "next/link";
import Background from "./layout-background";
import styles from "./layout-header.module.css";
import NavLink from "./layout-nav";
export default function Header() {
  return (
    <>
      <Background />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image
            priority
            src="/assets/logo.png"
            width={100}
            height={100}
            alt="Logo"
          />
          NextLevel
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
