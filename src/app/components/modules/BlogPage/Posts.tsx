"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../../styles/posts/index.module.scss";
import { dataPosts, dataPostsStatic } from "../../../utils/data";
import Article from "../../article/Article";
import { useDispatch, useSelector } from "react-redux";
import { PostItem } from "../../../types/post";
import { getAllPosts } from "../../../store/postSlice";
import { AppDispatch } from "../../../store/store";

const Posts: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { posts } = useSelector(
    (state: { post: { posts: PostItem[] } }) => state.post
  );

  // Визначення джерела даних
  const allPosts = Array.isArray(posts) && posts.length ? posts : dataPosts;

  // Локальний стан
  const [postsData, setPostsData] = useState<PostItem[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  // Завантаження даних з Redux
  useEffect(() => {
    if (!posts.length) {
      dispatch(getAllPosts());
    }
  }, [dispatch, posts.length]);

  // Ініціалізація постів при зміні джерела даних
  useEffect(() => {
    setPostsData(allPosts.slice(0, 2));
    setHasMore(allPosts.length > 2);
  }, [allPosts]);

  // Логіка завантаження додаткових постів
  const loadMorePosts = () => {
    if (postsData.length >= allPosts.length) {
      setHasMore(false);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setPostsData((prev) => [
        ...prev,
        ...allPosts.slice(prev.length, prev.length + 2),
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className={styles.posts}>
      <div className="container">
        <div className={styles.posts__inner}>
          <div className={styles.posts__top}>
            <div className={styles.posts__top__left}>
              <h1 className="title">Blog</h1>
            </div>
            <div className={styles.posts__top__right}>
              <p className={styles.posts__top__right_text}>
                Take a look at some of our proudest moments, where creativity,
                strategy, and innovation came together to make brands shine in
                the digital realm.
              </p>
            </div>
          </div>

          <div className={styles.posts__bottom}>
            <div className={styles.posts__large}>
              <article className={styles.articleLarge}>
                <div className={styles.articleLarge__img__wrapper}>
                  <Image
                    width={1290}
                    height={572}
                    src="/img/section-posts/post-img-5.jpg"
                    alt="Blog image"
                    loading="eager"
                  />
                </div>
                <div className={styles.articleLarge__content__wrapper}>
                  <div className={styles.articleLarge__content}>
                    <h4 className={styles.articleLarge__title}>
                      Introducing: A brand new Dribbble for your portfolio
                    </h4>
                    <p className={styles.articleLarge__text}>
                      Our suite of services is designed to cater to every aspect
                      of your online presence, from boosting your visibility to
                      engaging your audience and driving conversions.
                    </p>
                    <div className={styles.articleLarge__category}>
                      2023 - UX/UI & App Development
                    </div>
                  </div>
                  <a className={styles.articleLarge__link} href="#">
                    <Image
                      width={167}
                      height={167}
                      src="/img/section-posts/arrow-right.svg"
                      alt=""
                    />
                  </a>
                </div>
              </article>
            </div>

            <div className={styles.posts__static}>
              <div className={styles.articles}>
                {dataPostsStatic.map((item, idx) => (
                  <Article item={item} key={idx} />
                ))}
              </div>
            </div>

            <div className={styles.posts__infinite}>
              <div className={styles.articles}>
                {postsData.map((item, idx) => (
                  <Article item={item} key={idx} />
                ))}
              </div>

              {hasMore && (
                <div className={styles.loadMore_wrapper}>
                  <button onClick={loadMorePosts} className={styles.loadMore}>
                    {loading ? "Loading..." : "Load more"}
                  </button>
                </div>
              )}

              {!hasMore && <div className={styles.line}></div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
