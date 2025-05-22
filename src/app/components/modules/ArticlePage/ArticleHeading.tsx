"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../../styles/article-heading/index.module.scss";
import axios from "../../../../app/utils/axios";
import { dataPosts } from "../../../../app/utils/data";
import { Post, ArticleHeadingProps } from "../../../types/post";

const ArticleHeading: React.FC<ArticleHeadingProps> = ({ id }) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Post>(`/posts/${id}`);
        if (response.status === 200 && response.data) {
          setPost(response.data);
        } else {
          // throw new Error("No data from API");
          const numericId = parseInt(id, 10);
          const fallbackPost = dataPosts.find((p) => p.id === numericId) || null;
          if (fallbackPost) {
            setPost(fallbackPost);
          } else {
            setError("Post not found.");
          }
        }
      } catch (err) {
        console.warn("API fetch failed, falling back to local data:", err);
        const numericId = parseInt(id, 10);
        const fallbackPost = dataPosts.find((p) => p.id === numericId) || null;
        if (fallbackPost) {
          setPost(fallbackPost);
        } else {
          setError("Post not found.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <div className="container error">{error}</div>;
  }

  if (!post) {
    return null;
  }

  return (
    <section className={styles.article_heading}>
      <div className="container">
        <div className={styles.article_heading__inner}>
          <div className={styles.article_heading__top}>
            <div className={styles.article_heading__top__left}>
              <h3 className={styles.tag}>Article</h3>
              <h1 className={styles.article_heading__title}>{post.title}</h1>
              <p className={styles.article_heading__date}>
                {/* You may replace the hardcoded date with a dynamic value */}
                Sept 24, 2023 • 3 min read
              </p>
            </div>
            <div className={styles.article_heading__top__right}>
              <ul className={styles.article_heading__socials__list}>
                {['instagram','x','facebook','youtube'].map((network) => (
                  <li key={network} className={styles.article_heading__socials__item}>
                    <a href="#" className={styles.article_heading__socials__link}>
                      {network.charAt(0).toUpperCase() + network.slice(1)}
                    </a>
                  </li>
                ))}
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
                alt={post.title}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleHeading;
