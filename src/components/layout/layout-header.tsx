import Image from "next/image";
import Link from "next/link";
import Background from "./layout-background";
import styles from "./layout-header.module.css";
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
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
