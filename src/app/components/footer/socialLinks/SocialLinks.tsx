import React from 'react';
import SocialLink from "./socialLink/SocialLink"

const links = [
    {
      title: "instagram",
      path: "https://www.instagram.com/",
    },
    {
      title: "x",
      path: "https://x.com/",
    },
    {
      title: "facebook",
      path: "https://www.facebook.com/?locale=uk_UA",
    },
    {
      title: "youtube",
      path: "https://www.youtube.com/",
    },
  ];

type Props = {}

const SocialLinks = (props: Props) => {
  return (
    <ul className="footer__socialsList">
       {links.map((link) => (
          <SocialLink item={link} key={link.title}/>
        ))}
    </ul>
  )
}

export default SocialLinks;