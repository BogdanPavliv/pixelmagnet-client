import React from 'react';
import styles from "./socialLink.module.scss"
import { SocialLinkProps } from "../../../../types/nav";

const SocialLink = ({item}: SocialLinkProps) => {
  return (
    <li className={styles.footer__socialsItem}>
        <a className={styles.footer__socialsLink} href={item.path} target='_blank'>{item.title}</a>
    </li>
  )
}

export default SocialLink;