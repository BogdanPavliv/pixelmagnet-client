"use client"
import {useLenis} from "../../hooks/useLenis";
import ArticlePage from "../../components/templates/ArticlePage/ArticlePage"

const Article = ({ params }: { params: { id: string } }) => {
  // Smooth scrolling
  useLenis();

  return <ArticlePage params={params}/>
}

export default Article;