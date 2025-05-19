"use client";
import React, { useState, useEffect } from "react";
import FilterComponent from "../../../components/filter/FilterComponent";
import styles from '../../../styles/categories/index.module.scss';
import { dataProjects } from "../../../utils/data";
import Link from 'next/link';
import Image from "next/image";
import { Category } from "../../../utils/data";

type ProjectItem = {
  id: number;
  title: string;
  text: string;
  category: string;
  image: string;
};

const Categories = () => {
  const [projects, setProjects] = useState<ProjectItem[]>(
    dataProjects.slice(0, 3)
  );
  const [filteredProjects, setFilteredProjects] = useState<ProjectItem[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [scrollLoading, setScrollLoading] = useState(false);
  const [initialLoadDone, setInitialLoadDone] = useState(false);
  const [filteredCategory, setFilteredCategory] = useState<Category>("All");

  useEffect(() => {
    // При зміні категорії скидаємо стан і відображаємо перші 3 елементи
    const initialFiltered = dataProjects.filter(
      (project) =>
        filteredCategory === "All" || project.category === filteredCategory
    );
    setFilteredProjects(initialFiltered.slice(0, 3));
    setHasMore(initialFiltered.length > 3);
    setInitialLoadDone(false);
  }, [filteredCategory]);

  const loadMorePostsOnScroll = () => {
    const additionalProjects = dataProjects.filter(
      (project) =>
        filteredCategory === "All" || project.category === filteredCategory
    );

    if (filteredProjects.length >= additionalProjects.length) {
      setHasMore(false);
      return;
    }
    setScrollLoading(true);
    setTimeout(() => {
      setFilteredProjects((prevProjects) => [
        ...prevProjects,
        ...additionalProjects.slice(
          prevProjects.length,
          prevProjects.length + 3
        ),
      ]);
      setScrollLoading(false);
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (loading || scrollLoading || !hasMore || !initialLoadDone) return; // Спрацьовує тільки після першого кліку
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMorePostsOnScroll();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, scrollLoading, hasMore, initialLoadDone, loadMorePostsOnScroll]);

  const loadMorePosts = () => {
    if (initialLoadDone) return; // Якщо вже був клік, ігноруємо наступні кліки
    setInitialLoadDone(true); // Позначаємо, що перше завантаження зроблено

    const additionalProjects = dataProjects.filter(
      (project) =>
        filteredCategory === "All" || project.category === filteredCategory
    );

    if (filteredProjects.length >= additionalProjects.length) {
      setHasMore(false);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setFilteredProjects((prevProjects) => [
        ...prevProjects,
        ...additionalProjects.slice(
          prevProjects.length,
          prevProjects.length + 3
        ),
      ]);
      setLoading(false);
    }, 1500);
  };

  const handleFilterChange = (category: Category) => {
    setFilteredCategory(category);
  };
  return (
    <section className={styles.categories}>
      <div className="container">
        <FilterComponent
          onFilterChange={handleFilterChange}
          categories={[
            "All",
            "Branding",
            "UX/UI Design",
            "App Development",
            "Web Development",
            "Digital Transformation",
          ]}
        />
        <div className={styles.project_list}>
          {filteredProjects.map((project) => (
            <article key={project.id} className={styles.project_item}>
              <Link
                href={`/project/${project.id}`}
                className={styles.project_item__link_detail}
              >
                <Image
                  width={414}
                  height={444}
                  className={styles.project_item__img}
                  src={project.image}
                  alt={project.title}
                />
              </Link>
              <div className={styles.project_item__data}>
                <h3 className={styles.project_item__title}>
                  <Link
                    href={`/project/${project.id}`}
                    className={styles.project_item__link_product}
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className={styles.project_item__text}>{project.text}</p>
              </div>
            </article>
          ))}
        </div>
        {hasMore && !loading && !initialLoadDone && (
          <div className={styles.loadMore_wrapper}>
            <button onClick={loadMorePosts} className={styles.loadMore}>
              Load more
            </button>
          </div>
        )}
        {(loading || scrollLoading) && (
          <div className={styles.loading_wrapper}>
            <Image
              width={32}
              height={32}
              className={styles.loading}
              src="/img/section-posts/loading.gif"
              alt=""
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Categories;
