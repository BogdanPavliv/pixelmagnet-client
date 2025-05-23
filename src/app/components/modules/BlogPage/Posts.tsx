"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from '../../../styles/posts/index.module.scss';
import { dataPosts, dataPostsStatic } from "../../../utils/data";
import Article from "../../article/Article";
import { useDispatch, useSelector } from "react-redux";
import { PostItem } from "../../../types/post";
import { getAllPosts } from "../../../store/postSlice";
import { AppDispatch } from "../../../store/store";

const Posts: React.FC = () => {
  // Get data from Redux
  const dispatch: AppDispatch = useDispatch();
  const { posts, popularPosts } = useSelector(
    (state: { post: { posts: PostItem[]; popularPosts: PostItem[] } }) =>
      state.post
  );

  // Determine which source to use: data from the backend or fallback
  const sourcePosts = Array.isArray(posts) && posts.length ? posts : dataPosts;

  // Initialize the local state
  const [postsData, setPostsData] = useState<PostItem[]>(
    sourcePosts.slice(0, 2)
  );
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [scrollLoading, setScrollLoading] = useState(false);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  // When mounting the component, we get all posts
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  // When posts from the backend change, update the local state
  useEffect(() => {
    if (Array.isArray(posts) && posts.length) {
      setPostsData(posts.slice(0, 2));
    }
  }, [posts]);

  // Reload logic on scroll
  const loadMorePostsOnScroll = () => {
    const currentSource =
      Array.isArray(posts) && posts.length ? posts : dataPosts;
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, scrollLoading, loadMoreVisible, postsData, posts]);

  // "Load more" loading logic on click
  const loadMorePosts = () => {
    const currentSource =
      Array.isArray(posts) && posts.length ? posts : dataPosts;
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
                the digital realm. Our success stories are a testament to our
                dedication and expertise.
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
                    className={styles.articleLarge__img}
                    src="/img/section-posts/post-img-5.jpg"
                    alt=""
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
                      className="articleLarge__link--img"
                      src="/img/section-posts/arrow-right.svg"
                      alt=""
                    />
                  </a>
                </div>
              </article>
            </div>

            <div className={styles.posts__static}>
              <div className={styles.articles}>
                {dataPostsStatic.map((item: PostItem, idx) => (
                  <Article item={item} key={idx} />
                ))}
              </div>
            </div>

            <div className={styles.posts__large}>
              <article className={styles.articleLarge}>
                <div className={styles.articleLarge__img__wrapper}>
                  <Image
                    width={1290}
                    height={572}
                    src="/img/section-posts/post-img-6.jpg"
                    alt=""
                  />
                </div>
                <div className={styles.articleLarge__content__wrapper}>
                  <div className={styles.articleLarge__content}>
                    <h4 className={styles.articleLarge__title}>
                      Blueprint fidelity: between paper prototype and finished
                      product
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
                      className={styles.articleLarge__link__img}
                      src="/img/section-posts/arrow-right.svg"
                      alt=""
                    />
                  </a>
                </div>
              </article>
            </div>

            <div className={styles.posts__infinite}>
              <div className={styles.articles}>
                {postsData.map((item: PostItem, idx) => (
                  <Article item={item} key={idx} />
                ))}
              </div>

              {loadMoreVisible && (
                <div className={styles.loadMore_wrapper}>
                  <button onClick={handleLoadMore} className={styles.loadMore}>
                    Load more
                  </button>
                </div>
              )}

              {(loading || scrollLoading) && (
                <div className={styles.loading_wrapper}>
                  <img
                    width={32}
                    height={32}
                    className={styles.loading}
                    src="/img/section-posts/loading.gif"
                    alt=""
                  />
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
