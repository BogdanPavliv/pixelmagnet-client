"use client"

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from "next/image";
import axios from '../../utils/axios'
import {useLenis} from "../../hooks/useLenis";

import Circle from '../../components/UI/Circle';
import { dataPosts } from "../../utils/data";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';

import {dataRelatedArticles} from "../../utils/data";
import {sliderRelatedArticlesSettings} from "../../utils/common";

interface Post {
  id: number;
  title: string;
  text: string;
  images: {
    image: string;
  };
}

const ArticlePage = ({ params }: { params: { id: string } }) => {

  const [post, setPost] = useState<Post | null>(null)
  console.log(post);
  
  // Плавний скрол
  useLenis();

  // slider swiper

  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<any>(null);  // Використовується для доступу до Swiper instance

  // Функція для оновлення слайда при зміні input range
  const handleSlideChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCurrentSlide(value);
    if (swiperRef.current) {
      swiperRef.current.slideTo(value);
    }
  };

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

  // const postId = parseInt(params.id, 10);
  // const post = dataPosts.find(p => p.id === postId);

  if (!post) return <p>Post not found</p>;

  return (
    <div className='main'>
      <section className="article-heading">
        <div className="container">
          <div className="article-heading__inner">
            <div className="article-heading__top">
              <div className="article-heading__top--left">
                <h3 className="tag">Article</h3>
                <div className="article-heading__title">{post.title}</div>
                <p className="article-heading__date">Sept, 24 2023 • 3 min read</p>
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
                <Image width={1290} height={572} className="article-heading__bottom--img" src="/img/section-article/section-article-img-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="article-detail">
        <div className="container-sm">
          <div className="article-detail__inner">
            <p className="article-detail__text">
              In the ever-evolving landscape of digital creativity, there&apos;s a new star on the horizon, poised to revolutionize how designers, artists, and creatives showcase their work to the world. If you&apos;ve been following the creative scene, you&apos;ve likely heard of Dribbble, the platform that has long been a go-to for professionals and enthusiasts to share their design projects, gain inspiration, and connect with fellow creatives. But now, there&apos;s a brand-new player in town, and it&apos;s bringing fresh features and possibilities to the table.
            </p>
            <h4 className="article-detail__title">
              Introducing the New Kid on the Block
            </h4>
            <p className="article-detail__text">
              Much like Dribbble, this new portfolio platform offers a sleek, user-friendly interface that makes uploading and showcasing your work a breeze. But where it truly shines is in its commitment to innovation and addressing some of the limitations creatives have faced on existing platforms.
            </p>
            <h4 className="article-detail__title">
              1. A Focus on Inclusivity
            </h4>
            <p className="article-detail__text">
              While Dribbble has been known for its invite-only system, this new platform is embracing inclusivity from the start. It welcomes all creatives, regardless of their experience level, background, or network connections. This open-door policy fosters a diverse and vibrant creative community where talent is celebrated without the barriers of exclusivity.
            </p>
            <h4 className="article-detail__title">
              2. Enhanced Project Presentation
            </h4>
            <p className="article-detail__text">
              One standout feature of this new platform is its emphasis on comprehensive project presentation. Users can upload multiple images and videos per project, offering a more holistic view of their work. This richer project documentation allows creatives to tell a more complete story about their design process, from concept to execution.
            </p>
            <h4 className="article-detail__title">
              3. Seamless Collaboration
            </h4>
            <p className="article-detail__text">
              While Dribbble has mainly been a showcase platform, this new contender encourages collaboration. Creatives can form teams, join forces on projects, and even offer their services for freelance opportunities. It&apos;s not just about showcasing work; it&apos;s about facilitating connections and collaboration within the creative community.
            </p>
            <h4 className="article-detail__title">
              4. Learning and Resources
            </h4>
            <p className="article-detail__text">
              Beyond portfolios, this platform is also becoming a valuable resource hub for creatives. Users can share design resources, tutorials, and insights, making it a one-stop-shop for both showcasing work and expanding one&apos;s creative knowledge.
            </p>
            <h4 className="article-detail__title">
              5. Enhanced Discoverability
            </h4>
            <p className="article-detail__text">
              The platform utilizes advanced algorithms to suggest relevant content to users. This means that as a creative, you&apos;re more likely to discover projects and talents that resonate with your interests. It&apos;s a fantastic way to keep the inspiration flowing.
            </p>
            <h4 className="article-detail__title">
              Looking Ahead
            </h4>
            <p className="article-detail__text">
              While this new platform is gaining traction and excitement, it&apos;s still in its early stages. Much like Dribbble, it will evolve over time as it responds to the needs and feedback of its user base. But its commitment to inclusivity, collaboration, and comprehensive project presentation is a promising sign that it will continue to reshape the digital portfolio landscape.
            </p>
            <p className="article-detail__text">
              In conclusion, the arrival of a brand-new portfolio platform, with a fresh take on creativity and collaboration, is an exciting development for the design and creative community. As it gains momentum, it&apos;s worth keeping an eye on how this platform will shape the future of digital creativity and portfolio sharing, possibly giving established players like Dribbble a run for their money. So, if you&apos;re a creative looking for a new space to showcase your work and connect with like-minded individuals, the future looks bright with this innovative newcomer on the scene.
            </p>
          </div>
        </div>
      </section>
      <section className="articles-related">
        <div className="container-lg">
          <div className="articles-related__top">
           <h1 className="title">Related articles</h1>
           <a className="top--link" href="">
              View all
              <Image className="link-img" src="/img/section-featured-works/arrow-right.svg" width={36} height={36} alt="arrow right"/>
           </a>
          </div>
          <div className="articles-related__bottom">
            <div className="container-right">
              <div className="articles-related__slider--wrapper">
                <Swiper
                  {...sliderRelatedArticlesSettings}
                  onSwiper={(swiper) => { swiperRef.current = swiper; }} // Зберігаємо інстанс swiper
                  onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}  // Оновлюємо значення input при зміні слайду
                  className="swiper-article"
                >
                  {dataRelatedArticles.map((item, i) => (
                    <SwiperSlide key={i} className="related__slide--wrapper">
                      <div className="related__slide">
                        <div className="related__slide--img-wrapper">
                         <Image width={628} height={572} className="related__slide--img" src={item.image} alt={item.title} />
                        </div>
                        <h3 className="related__slide--title">{item.title}</h3>
                        <p className="related__slide--text">{item.text}</p>
                        
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="articles-related__slider--controls">
              {/* Input для перемикання слайдів */}
              <input
                className="articles-related__slider--range"
                type="range"
                min="0"
                max={dataRelatedArticles.length - 1}
                value={currentSlide}
                onChange={handleSlideChange}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="magnetize">
            <div className="container-xs">
              <div className="magnetize__wrapper">
                <h1 className="title text-white">Let&apos;s <span className='text-bg'>magnetize</span> your online presence with our creative prowess and expert strategies </h1>
                <Circle>Let&apos;s talk</Circle>
              </div>
            </div>
      </section>
    </div>
  )
}

export default ArticlePage;