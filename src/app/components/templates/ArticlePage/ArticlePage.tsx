import ArticleHeading from "../../../components/modules/ArticlePage/ArticleHeading";
import ArticleDetail from "../../../components/modules/ArticlePage/ArticleDetail";
import ArticlesRelated from "../../../components/modules/ArticlePage/ArticlesRelated";
import Magnetize from "../../../components/modules/MainPage/Magnetize";

const ArticlePage = ({ params }: { params: { id: string } }) => {
  return (
    <div className='main'>
      <ArticleHeading params={params}/>
      <ArticleDetail />
      <ArticlesRelated />
      <Magnetize />
    </div>
  )
}

export default ArticlePage