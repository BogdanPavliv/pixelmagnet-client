import React from 'react';
import styles from "./footerNavLink.module.scss"
import Link from 'next/link';
import { FooterNavLinkProps } from "../../../../types/nav";

const FooterNavLink = ({item}: FooterNavLinkProps) => {
  return (
    <li className={styles.footer__navItem}>
      <Link className={styles.footer__navLink} href={item.path}>{item.title}</Link>
    </li>
  )
}

export default FooterNavLink;