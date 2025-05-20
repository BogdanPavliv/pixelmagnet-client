"use client";
import { useParams } from "next/navigation"; // Використання useParams
import { useLenis } from "../../hooks/useLenis";
import ArticlePage from "../../components/templates/ArticlePage/ArticlePage";

const Article = () => {
  useLenis();

  const params = useParams();
  
  // Гарантуємо, що `params.id` — це рядок
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  return <ArticlePage id={id} />;
};

export default Article;
