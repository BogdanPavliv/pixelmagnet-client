import React from 'react';
import styles from "./socialLink.module.scss"

type Props = {
    item: { title: string; path: string; }; 
}

const SocialLink = ({item}: Props) => {
  return (
    <li className={styles.footer__socialsItem}>
        <a className={styles.footer__socialsLink} href={item.path} target='_blank'>{item.title}</a>
    </li>
  )
}

export default SocialLink;