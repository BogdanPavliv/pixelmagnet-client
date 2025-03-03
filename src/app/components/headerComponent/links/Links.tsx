import React from 'react';
import styles from "./links.module.scss";
import NavLink from './navLink/NavLink';

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Service",
    path: "/service",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

type Props = {}

const Links = (props: Props) => {
  return (
    <>
      <ul className={styles.header__navList}>
        {links.map((link) => (
          <NavLink item={link} key={link.title}/>
        ))}
      </ul>
    </>
  )
}

export default Links;