"use client";
import React, { useState, useEffect } from "react";
import FilterComponent from "../../../components/filter/FilterComponent";
import styles from '../../../styles/categories/index.module.scss';
import { dataProjects } from "../../../utils/data";
import Link from 'next/link';
import Image from "next/image";
import { Category } from "../../../types/categories";
import { ProjectItem } from "../../../types/categories";

const Categories = () => {
  const [filteredProjects, setFilteredProjects] = useState<ProjectItem[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [filteredCategory, setFilteredCategory] = useState<Category>("All");

  useEffect(() => {
    // When changing the category, we reset the state and display the first 3 items
    const initialFiltered = dataProjects.filter(
      (project) =>
        filteredCategory === "All" || project.category === filteredCategory
    );
    setFilteredProjects(initialFiltered.slice(0, 3));
    setHasMore(initialFiltered.length > 3);
  }, [filteredCategory]);

  const loadMorePosts = () => {
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
        {hasMore && (
          <div className={styles.loadMore_wrapper}>
            <button onClick={loadMorePosts} className={styles.loadMore}>
              {loading ? "Loading..." : "Load more"}
            </button>
          </div>
        )}
        {loading && (
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
