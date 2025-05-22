export type ArticleProps = {
  item: {
    _id?: string; // Якщо дані приходять з MongoDB
    id: number; // Для статичних ID
    title: string;
    text: string;
    image: string;
    imgUrl?: string;
  };
};

export interface ArticlePageProps {
  id: string;
}

export interface ImagesArticle {
  image: string;
}

export interface Article {
  id: number;
  title: string;
  text: string;
  image: string;
  imgUrl?: string;
  images: ImagesArticle;
}

export interface Article2 {
  id: number;
  title: string;
  text: string;
  image: string;
  images: ImagesArticle;
}