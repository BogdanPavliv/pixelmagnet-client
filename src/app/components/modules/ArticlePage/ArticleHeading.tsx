"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from '../../../styles/article-heading/index.module.scss';
import axios from "../../../../app/utils/axios";
import { dataPosts } from "../../../../app/utils/data";

interface Post {
  id: number;
  title: string;
  text: string;
  images: {
    image: string;
  };
}

const ArticleHeading = ({ params }: { params: { id: string } }) => {
  const [post, setPost] = useState<Post | null>(null);
  console.log(post);

  // Завантаження поста з бекенду або fallback
  const fetchPost = useCallback(async () => {
    try {
      const { data } = await axios.get(`/posts/${params.id}`);
      console.log(params.id);
      console.log(data);

      if (data) {
        setPost(data);
      } else {
        const postId = parseInt(params.id, 10);
        const fallbackPost = dataPosts.find((p) => p.id === postId);
        if (fallbackPost) {
          setPost(fallbackPost);
        } else {
          console.warn("Post not found in fallback data.");
        }
      }
    } catch (error) {
      console.error("Error fetching post from server:", error);
      const postId = parseInt(params.id, 10);
      const fallbackPost = dataPosts.find((p) => p.id === postId);
      if (fallbackPost) {
        setPost(fallbackPost);
      } else {
        console.warn("Post not found in fallback data.");
      }
    }
  }, [params.id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (!post) return <p>Post not found</p>;

  return (
    <section className={styles.article_heading}>
      <div className="container">
        <div className={styles.article_heading__inner}>
          <div className={styles.article_heading__top}>
            <div className={styles.article_heading__top__left}>
              <h3 className={styles.tag}>Article</h3>
              <div className={styles.article_heading__title}>{post.title}</div>
              <p className={styles.article_heading__date}>
                Sept, 24 2023 • 3 min read
              </p>
            </div>
            <div className={styles.article_heading__top__right}>
              <ul className={styles.article_heading__socials__list}>
                <li className={styles.article_heading__socials__item}>
                  <a href="#" className={styles.article_heading__socials__link}>
                    instagram
                  </a>
                </li>
                <li className={styles.article_heading__socials__item}>
                  <a href="#" className={styles.article_heading__socials__link}>
                    x
                  </a>
                </li>
                <li className={styles.article_heading__socials__item}>
                  <a href="#" className={styles.article_heading__socials__link}>
                    facebook
                  </a>
                </li>
                <li className={styles.article_heading__socials__item}>
                  <a href="#" className={styles.article_heading__socials__link}>
                    youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.article_heading__bottom}>
            <div className={styles.article_heading__bottom__img_wrapper}>
              <Image
                width={1290}
                height={572}
                className={styles.article_heading__bottom__img}
                src="/img/section-article/section-article-img-1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleHeading;
