"use client";
import clsx from "clsx";
import Link from "next/link";
import styles from "./layout-nav.module.css";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={clsx(styles.link, pathname.startsWith(href) && styles.active)}
    >
      {children}
    </Link>
  );
}
