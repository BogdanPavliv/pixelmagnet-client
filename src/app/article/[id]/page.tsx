"use client";
import { useParams } from "next/navigation";
import ArticlePage from "../../components/templates/ArticlePage/ArticlePage";

const Article = () => {
  const params = useParams();
  
  // Гарантуємо, що `params.id` — це рядок
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  return <ArticlePage id={id} />;
};

export default Article;
