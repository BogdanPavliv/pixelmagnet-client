export type PostItem = {
  _id?: any;
  id: number;
  title: string;
  text: string;
  image: string;
};

export interface Post {
  id: number;
  title: string;
  text: string;
  images: {
    image: string;
  };
}

export interface ArticleHeadingProps {
  id: string;
}