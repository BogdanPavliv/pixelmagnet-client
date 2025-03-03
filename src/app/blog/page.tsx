"use client";

import React, { useState, useEffect } from 'react';
import styles from "./blog.module.scss";
import { dataPosts, dataPostsStatic } from "../utils/data";
import Article from '../components/article/Article';
import Circle from '../components/UI/Circle';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { useLenis } from "../hooks/useLenis";

import { getAllPosts } from "../store/postSlice";
import { AppDispatch } from '../store/store';

type PostItem = {
  _id?: any;
  id: number;
  title: string;
  text: string;
  image: string;
};

const BlogPage: React.FC = () => {
  // Плавний скрол
  useLenis();

  // Дістаємо дані з Redux
  const dispatch: AppDispatch = useDispatch();
  const { posts, popularPosts } = useSelector(
    (state: { post: { posts: PostItem[], popularPosts: PostItem[] } }) => state.post
  );

  // Визначаємо, яке джерело використовувати: дані з бекенду або fallback
  const sourcePosts = (Array.isArray(posts) && posts.length) ? posts : dataPosts;

  // Ініціалізуємо локальний стейт
  const [postsData, setPostsData] = useState<PostItem[]>(sourcePosts.slice(0, 2));
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [scrollLoading, setScrollLoading] = useState(false);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  // При монтуванні компонента — отримуємо всі пости
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  // Коли posts з бекенду змінюються, оновлюємо локальний стейт
  useEffect(() => {
    if (Array.isArray(posts) && posts.length) {
      setPostsData(posts.slice(0, 2));
    }
  }, [posts]);

  // Логіка дозавантаження на скрол
  const loadMorePostsOnScroll = () => {
    const currentSource = (Array.isArray(posts) && posts.length) ? posts : dataPosts;
    if (postsData.length >= currentSource.length) {
      setHasMore(false);
      return;
    }
    setScrollLoading(true);
    setTimeout(() => {
      setPostsData((prev) =>
        prev.concat(currentSource.slice(prev.length, prev.length + 2))
      );
      setScrollLoading(false);
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (loading || scrollLoading || loadMoreVisible) return;
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMorePostsOnScroll();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, scrollLoading, loadMoreVisible, postsData, posts]);

  // Логіка завантаження "Load more" по кліку
  const loadMorePosts = () => {
    const currentSource = (Array.isArray(posts) && posts.length) ? posts : dataPosts;
    if (postsData.length >= currentSource.length) {
      setHasMore(false);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setPostsData((prev) =>
        prev.concat(currentSource.slice(prev.length, prev.length + 2))
      );
      setLoading(false);
      setLoadMoreVisible(false);
    }, 1500);
  };

  const handleLoadMore = () => {
    loadMorePosts();
  };

  return (
    <div className="main">
      <section className={styles.posts}>
        <div className="container">
          <div className="posts__inner">
            <div className="posts__top">
              <div className="posts__top--left">
                <h1 className="title">Blog</h1>
              </div>
              <div className="posts__top--right">
                <p className="posts__top--right-text">
                  Take a look at some of our proudest moments, where creativity, strategy,
                  and innovation came together to make brands shine in the digital realm.
                  Our success stories are a testament to our dedication and expertise.
                </p>
              </div>
            </div>

            <div className="posts__bottom">
              <div className="posts__large">
                <article className="articleLarge">
                  <div className="articleLarge__img__wrapper">
                    <Image
                      width={1290}
                      height={572}
                      className="articleLarge__img"
                      src="/img/section-posts/post-img-5.jpg"
                      alt=""
                    />
                  </div>
                  <div className="articleLarge__content--wrapper">
                    <div className="articleLarge__content">
                      <h4 className="articleLarge__title">
                        Introducing: A brand new Dribbble for your portfolio
                      </h4>
                      <p className="articleLarge__text">
                        Our suite of services is designed to cater to every aspect of your online presence,
                        from boosting your visibility to engaging your audience and driving conversions.
                      </p>
                      <div className="articleLarge__category">
                        2023 - UX/UI & App Development
                      </div>
                    </div>
                    <a className="articleLarge__link" href="#">
                      <Image
                        width={167}
                        height={167}
                        className="articleLarge__link--img"
                        src="/img/section-posts/arrow-right.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </article>
              </div>

              <div className="posts__static">
                <div className={styles.articles}>
                  {dataPostsStatic.map((item: PostItem, idx) => (
                    <Article item={item} key={idx} />
                  ))}
                </div>
              </div>

              <div className="posts__large">
                <article className="articleLarge">
                  <div className="articleLarge__img__wrapper">
                    <Image
                      width={1290}
                      height={572}
                      src="/img/section-posts/post-img-6.jpg"
                      alt=""
                    />
                  </div>
                  <div className="articleLarge__content--wrapper">
                    <div className="articleLarge__content">
                      <h4 className="articleLarge__title">
                        Blueprint fidelity: between paper prototype and finished product
                      </h4>
                      <p className="articleLarge__text">
                        Our suite of services is designed to cater to every aspect of your online presence,
                        from boosting your visibility to engaging your audience and driving conversions.
                      </p>
                      <div className="articleLarge__category">
                        2023 - UX/UI & App Development
                      </div>
                    </div>
                    <a className="articleLarge__link" href="#">
                      <Image
                        width={167}
                        height={167}
                        className="articleLarge__link--img"
                        src="/img/section-posts/arrow-right.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </article>
              </div>

              <div className="posts__infinite">
                <div className={styles.articles}>
                  {postsData.map((item: PostItem, idx) => (
                    <Article item={item} key={idx} />
                  ))}
                </div>

                {loadMoreVisible && (
                  <div className="loadMore_wrapper">
                    <button onClick={handleLoadMore} className="loadMore">
                      Load more
                    </button>
                  </div>
                )}

                {(loading || scrollLoading) && (
                  <div className="loading_wrapper">
                    <img
                      width={32}
                      height={32}
                      className={styles.loading}
                      src="/img/section-posts/loading.gif"
                      alt=""
                    />
                  </div>
                )}

                {!hasMore && <div className="line"></div>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="magnetize">
        <div className="container-xs">
          <div className="magnetize__wrapper">
            <h1 className="title text-white">
              Let&apos;s <span className="text-bg">magnetize</span> your online presence with our creative prowess
              and expert strategies
            </h1>
            <Circle>Let&apos;s talk</Circle>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
