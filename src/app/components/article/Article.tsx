import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  item: {
    _id?: any;
    id: number;
    title: string;
    text: string;
    image: string;
    imgUrl?: string; // з бекенду може приходити або ні
  };
};

const Article: React.FC<Props> = ({ item }) => {
  // Формуємо коректний шлях для <Link />
  const linkHref = item._id ? `/article/${item._id}` : `/article/${item.id}`;

  // Функція, яка формує коректну адресу зображення
  const getImageSrc = (): string => {
    // Якщо немає item.imgUrl, використовуємо статичний item.image
    if (!item.imgUrl) {
      return item.image;
    }

    // Якщо item.imgUrl починається зі слеша ("/img/section-posts/post-img-1.jpg"),
    // то просто конкатенуємо: http://localhost:3002 + /img/section-posts/post-img-1.jpg
    // Якщо ж слеша немає, додаємо його вручну.
    const cleanedImgUrl = item.imgUrl.startsWith('/')
      ? item.imgUrl
      : `/${item.imgUrl}`;

    return `https://pixelmagnet-admin-mern-server.netlify.app${cleanedImgUrl}`;
  };

  return (
    <article className="article">
      <div className="article__img__wrapper">
        <Link href={linkHref} className="article__link-detail">
          <Image
            width={628}
            height={572}
            className="article__img"
            src={getImageSrc()}
            alt={item.title}
          />
        </Link>
      </div>
      <div className="acticle__content">
        <Link href={linkHref} className="article__link-article">
          <h4 className="article__title">{item.title}</h4>
        </Link>
        <p className="article__text">{item.text}</p>
      </div>
    </article>
  );
};

export default Article;
