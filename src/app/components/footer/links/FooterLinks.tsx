import React from 'react';
import styles from "./footerLinks.module.scss";
import FooterNavLink from "./navLink/FooterNavLink";

const links = [
  {
    title: "Service",
    path: "/service",
  },
  {
    title: "About",
    path: "/about",
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

const FooterLinks = (props: Props) => {
  return (
    <ul className="footer__navList">
      {links.map((link) => (
          <FooterNavLink item={link} key={link.title}/>
        ))}
    </ul>
  )
}

export default FooterLinks;