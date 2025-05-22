export type ProjectItem = {
  id: number;
  title: string;
  text: string;
  category: string;
  image: string;
};

export type Category = 'All' | 'Branding' | 'UX/UI Design' | 'App Development' | 'Web Development' | 'Digital Transformation';

export interface Images {
  image: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
}

export interface Project {
  id: number;
  title: string;
  text: string;
  image: string;
  category: Category;
  images: Images;
}

export interface FilterComponentProps {
  onFilterChange: (category: Category) => void;
  categories: Category[];
}