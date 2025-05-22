import ArticleHeading from "../../../components/modules/ArticlePage/ArticleHeading";
import ArticleDetail from "../../../components/modules/ArticlePage/ArticleDetail";
import ArticlesRelated from "../../../components/modules/ArticlePage/ArticlesRelated";
import Magnetize from "../../../components/modules/MainPage/Magnetize";
import { ArticlePageProps } from "../../../types/article";

const ArticlePage: React.FC<ArticlePageProps> = ({ id }) => {
  return (
    <div className="main">
      <ArticleHeading id={id} />
      <ArticleDetail />
      <ArticlesRelated />
      <Magnetize />
    </div>
  );
};

export default ArticlePage;
