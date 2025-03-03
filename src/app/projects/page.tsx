"use client"

import React, { useState, useEffect } from 'react';
import styles from "./projects.module.scss";
import Link from 'next/link';
import Image from 'next/image';

import {useLenis} from "../hooks/useLenis";

import FilterComponent from '../components/filter/FilterComponent';
import { dataProjects } from "../utils/data";
import { Category } from "../utils/data";
import Circle from '../components/UI/Circle';

type ProjectItem = {
  id: number;
  title: string,
  text: string,
  category: string,
  image: string,
}

const ProjectsPage = () => {
  // Плавний скрол
  useLenis();
  
  const [projects, setProjects] = useState<ProjectItem[]>(dataProjects.slice(0, 3));
  const [filteredProjects, setFilteredProjects] = useState<ProjectItem[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [scrollLoading, setScrollLoading] = useState(false);
  const [initialLoadDone, setInitialLoadDone] = useState(false);
  const [filteredCategory, setFilteredCategory] = useState<Category>('All');

  useEffect(() => {
    // При зміні категорії скидаємо стан і відображаємо перші 3 елементи
    const initialFiltered = dataProjects.filter(project => 
      filteredCategory === 'All' || project.category === filteredCategory
    );
    setFilteredProjects(initialFiltered.slice(0, 3));
    setHasMore(initialFiltered.length > 3);
    setInitialLoadDone(false);
  }, [filteredCategory]);

  const loadMorePostsOnScroll = () => {
    const additionalProjects = dataProjects.filter(project =>
      filteredCategory === 'All' || project.category === filteredCategory
    );

    if (filteredProjects.length >= additionalProjects.length) {
      setHasMore(false);
      return;
    }
    setScrollLoading(true);
    setTimeout(() => {
      setFilteredProjects(prevProjects => [
        ...prevProjects,
        ...additionalProjects.slice(prevProjects.length, prevProjects.length + 3)
      ]);
      setScrollLoading(false);
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (loading || scrollLoading || !hasMore || !initialLoadDone) return; // Спрацьовує тільки після першого кліку
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
        loadMorePostsOnScroll();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, scrollLoading, hasMore, initialLoadDone, loadMorePostsOnScroll]);

  const loadMorePosts = () => {
    if (initialLoadDone) return; // Якщо вже був клік, ігноруємо наступні кліки
    setInitialLoadDone(true); // Позначаємо, що перше завантаження зроблено

    const additionalProjects = dataProjects.filter(project =>
      filteredCategory === 'All' || project.category === filteredCategory
    );

    if (filteredProjects.length >= additionalProjects.length) {
      setHasMore(false);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setFilteredProjects(prevProjects => [
        ...prevProjects,
        ...additionalProjects.slice(prevProjects.length, prevProjects.length + 3)
      ]);
      setLoading(false);
    }, 1500);
  };

  const handleFilterChange = (category: Category) => {
    setFilteredCategory(category);
  };

  return (
    <div className='main'>
      <section className="projects">
        <div className="container">
          <div className="projects__inner">
            <div className="projects__top">
              <div className="projects__top--left">
                <div className="title">Projects</div>
                <div className="projects__quantity">1200+</div>
              </div>
              <div className="projects__top--right">
                <p className="projects__top--right-text">Take a look at some of our proudest moments, where creativity, strategy, and innovation came together to make brands shine in the digital realm. Our success stories are a testament to our dedication and expertise.</p>
              </div>
            </div>
            <div className="projects__bottom">
              <div className="projects__bottom-items">
                <div className="projects__bottom-left">
                  <div className="projects__bottom-left-img-wrapper-xl">
                   <Image width={501} height={375} className="projects__bottom-left-img-xl" src="/img/section-projects/section-projects-img-1.jpg" alt="" />
                  </div>
                  <div className="projects__bottom-left-img-wrapper-md">
                   <Image width={238} height={375} className="projects__bottom-left-img-md" src="/img/section-projects/section-projects-img-2.jpg" alt="" />
                  </div>
                </div>
                <div className="projects__bottom-right">
                  <div className="projects__bottom-right-top">
                    <div className="projects__bottom-right-img-wrapper-sm">
                      <Image width={239} height={176} className="projects__bottom-right-img-sm" src="/img/section-projects/section-projects-img-3.jpg" alt="" />
                    </div>
                    <div className="projects__bottom-right-img-wrapper-sm">
                      <Image width={239} height={176} className="projects__bottom-right-img-sm" src="/img/section-projects/section-projects-img-4.jpg" alt="" />
                    </div>
                  </div>
                  <div className="projects__bottom-right-bottom">
                    <div className="projects__bottom-right-img-wrapper-wide">
                      <Image width={501} height={176} className="projects__bottom-right-img-wide" src="/img/section-projects/section-projects-img-5.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="categories">
        <div className="container">
          <FilterComponent 
            onFilterChange={handleFilterChange} 
            categories={['All', 'Branding', 'UX/UI Design', 'App Development', 'Web Development', 'Digital Transformation']} 
          />
          <div className="project-list">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-item">
                <Link href={`/project/${project.id}`} className="project-item__link-detail">
                    <Image
                      width={414}
                      height={444}
                      className="project-item__img"
                      src={project.image}
                      alt={project.title}
                    />
                </Link>
                <div className="project-item__data">
                  <h3 className="project-item__title">
                    <Link href={`/project/${project.id}`} className="project-item__link-product">
                        {project.title}
                    </Link>
                  </h3>
                  <p className="project-item__text">{project.text}</p>
                </div>
              </article>
            ))}
          </div>
          {hasMore && !loading && !initialLoadDone && (
            <div className="loadMore_wrapper">
              <button onClick={loadMorePosts} className="loadMore">
                Load more
              </button>
            </div>
          )}
          {(loading || scrollLoading) && (
            <div className="loading_wrapper">
              <Image width={32} height={32} className={styles.loading} src="/img/section-posts/loading.gif" alt="" />
            </div>
          )}
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
  );
}

export default ProjectsPage;
