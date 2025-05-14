"use client";
import { useLenis } from "../hooks/useLenis";

import BlogPage from "../components/templates/BlogPage/BlogPage"


const Blog = () => {
  // Плавний скрол
  useLenis();

  return <BlogPage />
};

export default Blog;