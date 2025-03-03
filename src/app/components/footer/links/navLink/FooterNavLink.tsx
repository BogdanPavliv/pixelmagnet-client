import React from 'react';
import styles from "./footerNavLink.module.scss"
import Link from 'next/link';


type Props = {
    item: { title: string; path: string; }; 
}

const FooterNavLink = ({item}: Props) => {
  return (
    <li className={styles.footer__navItem}>
      <Link className={styles.footer__navLink} href={item.path}>{item.title}</Link>
    </li>
  )
}

export default FooterNavLink;