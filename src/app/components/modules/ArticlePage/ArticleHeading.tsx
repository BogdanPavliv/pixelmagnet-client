"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
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
    <section className="article-heading">
      <div className="container">
        <div className="article-heading__inner">
          <div className="article-heading__top">
            <div className="article-heading__top--left">
              <h3 className="tag">Article</h3>
              <div className="article-heading__title">{post.title}</div>
              <p className="article-heading__date">
                Sept, 24 2023 • 3 min read
              </p>
            </div>
            <div className="article-heading__top--right">
              <ul className="article-heading__socials--list">
                <li className="article-heading__socials--item">
                  <a href="#" className="article-heading__socials--link">
                    instagram
                  </a>
                </li>
                <li className="article-heading__socials--item">
                  <a href="#" className="article-heading__socials--link">
                    x
                  </a>
                </li>
                <li className="article-heading__socials--item">
                  <a href="#" className="article-heading__socials--link">
                    facebook
                  </a>
                </li>
                <li className="article-heading__socials--item">
                  <a href="#" className="article-heading__socials--link">
                    youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="article-heading__bottom">
            <div className="article-heading__bottom--img-wrapper">
              <Image
                width={1290}
                height={572}
                className="article-heading__bottom--img"
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
