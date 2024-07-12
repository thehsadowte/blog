import React, { ReactNode } from "react";
import Link from "next/link";
import styles from "./app-link.module.css";
import { UrlObject } from "url";

function AppLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string | UrlObject;
}) {
  return (
    <Link className={styles.root} href={href}>
      {children}
    </Link>
  );
}

export default AppLink;
