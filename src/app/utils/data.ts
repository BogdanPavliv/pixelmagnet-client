interface ImagesArticle {
  image: string;
}

interface Article {
  id: number;
  title: string;
  text: string;
  image: string;
  imgUrl?: string;
  images: ImagesArticle;
}

interface Article2 {
  id: number;
  title: string;
  text: string;
  image: string;
  images: ImagesArticle;
}

export const dataPosts: Article[] = [
    {
        id: 1,
        title: "How to create SVG-ready icon symbols in Sketch",
        text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
        image: "/img/section-posts/post-img-1.jpg",
        
        images: {
          image: "/img/section-article/section-article-img-1.jpg",
        }
    },
    {
        id: 2,
        title: "Designers and statisticians disagree on what makes a good information graphic",
        text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
        image: "/img/section-posts/post-img-2.jpg",
        
        images: {
          image: "/img/section-article/section-article-img-1.jpg",
        }
    },
    {
        id: 3,
        title: "How to create SVG-ready icon symbols in Sketch",
        text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
        image: "/img/section-posts/post-img-1.jpg",
       
        images: {
          image: "/img/section-article/section-article-img-1.jpg",
        }
    },
    {
        id: 4,
        title: "Designers and statisticians disagree on what makes a good information graphic",
        text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
        image: "/img/section-posts/post-img-2.jpg",
        
        images: {
          image: "/img/section-article/section-article-img-1.jpg",
        }
    },
    {
        id: 5,
        title: "How to create SVG-ready icon symbols in Sketch",
        text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
        image: "/img/section-posts/post-img-1.jpg",
        
        images: {
          image: "/img/section-article/section-article-img-1.jpg",
        }
    },
    {
        id: 6,
        title: "Designers and statisticians disagree on what makes a good information graphic",
        text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
        image: "/img/section-posts/post-img-2.jpg",
        
        images: {
          image: "/img/section-article/section-article-img-1.jpg",
        }
    },
    {
        id: 7,
        title: "How to create SVG-ready icon symbols in Sketch",
        text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
        image: "/img/section-posts/post-img-1.jpg",
        
        images: {
          image: "/img/section-article/section-article-img-1.jpg",
        }
    },
    {
        id: 8,
        title: "Designers and statisticians disagree on what makes a good information graphic",
        text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
        image: "/img/section-posts/post-img-2.jpg",
        
        images: {
          image: "/img/section-article/section-article-img-1.jpg",
        }
    },
    {
        id: 9,
        title: "How to create SVG-ready icon symbols in Sketch",
        text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
        image: "/img/section-posts/post-img-1.jpg",
        
        images: {
          image: "/img/section-article/section-article-img-1.jpg",
        }
    },
    {
        id: 10,
        title: "Designers and statisticians disagree on what makes a good information graphic",
        text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
        image: "/img/section-posts/post-img-2.jpg",
        
        images: {
          image: "/img/section-article/section-article-img-1.jpg",
        }
    },
];

export const dataPostsStatic: Article2[] = [
    {
        id: 1,
        title: "Email Love - Email Inspiration, Templates and Discovery",
        text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
        image: "/img/section-posts/post-img-3.jpg",

        images: {
          image: "/img/section-article/section-article-img-1.jpg",
        }
    },
    {
        id: 2,
        title: "What makes your design awesome?",
        text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
        image: "/img/section-posts/post-img-4.jpg",

        images: {
          image: "/img/section-article/section-article-img-1.jpg",
        }
    }
];

export const dataBrands: Array<{ id: number; name: string; accent?: boolean}> = [
    {
        id: 1,
        name: "Richemont",
        accent: false
    },
    {
        id: 2,
        name: "META",
        accent: true
    },
    {
        id: 3,
        name: "HBO Max",
        accent: false
    },
    {
        id: 4,
        name: "Modelo",
        accent: true
    },
    {
        id: 5,
        name: "Dropbox",
        accent: false
    },
    {
        id: 6,
        name: "Millenium",
        accent: true
    },
    {
        id: 7,
        name: "META",
        accent: false
    },
    {
        id: 8,
        name: "HBO Max",
        accent: true
    },
    {
        id: 9,
        name: "Dropbox",
        accent: false
    },
    {
        id: 10,
        name: "Modelo",
        accent: true
    },
];

export const dataFaetured: Array<{ id: number; title: string; text: string; image: string; promo: boolean}> = [
    {
        id: 1,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-featured-works/featured-works-img-1.jpg",
        promo: true
    },
    {
        id: 2,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-featured-works/featured-works-img-2.jpg",
        promo: false
    },
    {
        id: 3,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-featured-works/featured-works-img-1.jpg",
        promo: true
    },
    {
        id: 4,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-featured-works/featured-works-img-2.jpg",
        promo: false
    },
    {
        id: 5,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-featured-works/featured-works-img-1.jpg",
        promo: true
    },
    {
        id: 6,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-featured-works/featured-works-img-2.jpg",
        promo: false
    },
    {
        id: 7,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-featured-works/featured-works-img-1.jpg",
        promo: true
    },
    {
        id: 8,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-featured-works/featured-works-img-2.jpg",
        promo: false
    },
    {
        id: 9,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-featured-works/featured-works-img-1.jpg",
        promo: true
    },
    {
        id: 10,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-featured-works/featured-works-img-2.jpg",
        promo: false
    },
];

export const dataTestimonials: Array<{ id: number; name: string; role: string; image: string; quote: string}> = [
    {
        id: 1,
        name: "Adam Freeman",
        role: "Startup owner",
        image: "/img/section-testimonials/testimonials.img-1.jpg",
        quote: "PixelMagnet played a crucial role in launching our startup. From logo design to content marketing, they covered it all. Their creative approach and attention to detail set them apart. We wouldn't have achieved our initial success without them."
    },
    {
        id: 2,
        name: "Adam Freeman",
        role: "Startup owner",
        image: "/img/section-testimonials/testimonials.img-1.jpg",
        quote: "PixelMagnet played a crucial role in launching our startup. From logo design to content marketing, they covered it all. Their creative approach and attention to detail set them apart. We wouldn't have achieved our initial success without them."
    },
    {
        id: 3,
        name: "Adam Freeman",
        role: "Startup owner",
        image: "/img/section-testimonials/testimonials.img-1.jpg",
        quote: "PixelMagnet played a crucial role in launching our startup. From logo design to content marketing, they covered it all. Their creative approach and attention to detail set them apart. We wouldn't have achieved our initial success without them."
    },
    {
        id: 4,
        name: "Adam Freeman",
        role: "Startup owner",
        image: "/img/section-testimonials/testimonials.img-1.jpg",
        quote: "PixelMagnet played a crucial role in launching our startup. From logo design to content marketing, they covered it all. Their creative approach and attention to detail set them apart. We wouldn't have achieved our initial success without them."
    },
    {
        id: 5,
        name: "Adam Freeman",
        role: "Startup owner",
        image: "/img/section-testimonials/testimonials.img-1.jpg",
        quote: "PixelMagnet played a crucial role in launching our startup. From logo design to content marketing, they covered it all. Their creative approach and attention to detail set them apart. We wouldn't have achieved our initial success without them."
    },
    {
        id: 6,
        name: "Adam Freeman",
        role: "Startup owner",
        image: "/img/section-testimonials/testimonials.img-1.jpg",
        quote: "PixelMagnet played a crucial role in launching our startup. From logo design to content marketing, they covered it all. Their creative approach and attention to detail set them apart. We wouldn't have achieved our initial success without them."
    },
    {
        id: 7,
        name: "Adam Freeman",
        role: "Startup owner",
        image: "/img/section-testimonials/testimonials.img-1.jpg",
        quote: "PixelMagnet played a crucial role in launching our startup. From logo design to content marketing, they covered it all. Their creative approach and attention to detail set them apart. We wouldn't have achieved our initial success without them."
    },
    {
        id: 8,
        name: "Adam Freeman",
        role: "Startup owner",
        image: "/img/section-testimonials/testimonials.img-1.jpg",
        quote: "PixelMagnet played a crucial role in launching our startup. From logo design to content marketing, they covered it all. Their creative approach and attention to detail set them apart. We wouldn't have achieved our initial success without them."
    },
    {
        id: 9,
        name: "Adam Freeman",
        role: "Startup owner",
        image: "/img/section-testimonials/testimonials.img-1.jpg",
        quote: "PixelMagnet played a crucial role in launching our startup. From logo design to content marketing, they covered it all. Their creative approach and attention to detail set them apart. We wouldn't have achieved our initial success without them."
    },
    {
        id: 10,
        name: "Adam Freeman",
        role: "Startup owner",
        image: "/img/section-testimonials/testimonials.img-1.jpg",
        quote: "PixelMagnet played a crucial role in launching our startup. From logo design to content marketing, they covered it all. Their creative approach and attention to detail set them apart. We wouldn't have achieved our initial success without them."
    },
];

export const dataBranding: Array<{ id: number; title: string; text: string; image: string; promo: boolean}> = [
    {
        id: 1,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-branding/section-branding-img-1.jpg",
        promo: true
    },
    {
        id: 2,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-branding/section-branding-img-2.jpg",
        promo: false
    },
    {
        id: 3,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-branding/section-branding-img-1.jpg",
        promo: true
    },
    {
        id: 4,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-branding/section-branding-img-2.jpg",
        promo: false
    },
    {
        id: 5,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-branding/section-branding-img-1.jpg",
        promo: true
    },
    {
        id: 6,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-branding/section-branding-img-2.jpg",
        promo: false
    },
    {
        id: 7,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-branding/section-branding-img-1.jpg",
        promo: true
    },
    {
        id: 8,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-branding/section-branding-img-2.jpg",
        promo: false
    },
    {
        id: 9,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-branding/section-branding-img-1.jpg",
        promo: true
    },
    {
        id: 10,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-branding/section-branding-img-2.jpg",
        promo: false
    },
];

export const dataApp: Array<{ id: number; title: string; text: string; image: string; promo: boolean}> = [
    {
        id: 1,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-app/section-app-img-1.jpg",
        promo: true
    },
    {
        id: 2,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-app/section-app-img-2.jpg",
        promo: false
    },
    {
        id: 3,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-app/section-app-img-1.jpg",
        promo: true
    },
    {
        id: 4,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-app/section-app-img-2.jpg",
        promo: false
    },
    {
        id: 5,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-app/section-app-img-1.jpg",
        promo: true
    },
    {
        id: 6,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-app/section-app-img-2.jpg",
        promo: false
    },
    {
        id: 7,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-app/section-app-img-1.jpg",
        promo: true
    },
    {
        id: 8,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-app/section-app-img-2.jpg",
        promo: false
    },
    {
        id: 9,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-app/section-app-img-1.jpg",
        promo: true
    },
    {
        id: 10,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-app/section-app-img-2.jpg",
        promo: false
    },
];

export const dataDigital: Array<{ id: number; title: string; text: string; image: string; promo: boolean}> = [
    {
        id: 1,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-digital/section-digital-img-1.jpg",
        promo: true
    },
    {
        id: 2,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-digital/section-digital-img-2.jpg",
        promo: false
    },
    {
        id: 3,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-digital/section-digital-img-1.jpg",
        promo: true
    },
    {
        id: 4,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-digital/section-digital-img-2.jpg",
        promo: false
    },
    {
        id: 5,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-digital/section-digital-img-1.jpg",
        promo: true
    },
    {
        id: 6,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-digital/section-digital-img-2.jpg",
        promo: false
    },
    {
        id: 7,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-digital/section-digital-img-1.jpg",
        promo: true
    },
    {
        id: 8,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-digital/section-digital-img-2.jpg",
        promo: false
    },
    {
        id: 9,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-digital/section-digital-img-1.jpg",
        promo: true
    },
    {
        id: 10,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-digital/section-digital-img-2.jpg",
        promo: false
    },
];

export const dataAdvancement: Array<{ id: number; title: string; text: string; image: string; promo: boolean}> = [
    {
        id: 1,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-advancement/section-advancement-img-1.jpg",
        promo: true
    },
    {
        id: 2,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-advancement/section-advancement-img-2.jpg",
        promo: false
    },
    {
        id: 3,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-advancement/section-advancement-img-1.jpg",
        promo: true
    },
    {
        id: 4,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-advancement/section-advancement-img-2.jpg",
        promo: false
    },
    {
        id: 5,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-advancement/section-advancement-img-1.jpg",
        promo: true
    },
    {
        id: 6,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-advancement/section-advancement-img-2.jpg",
        promo: false
    },
    {
        id: 7,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-advancement/section-advancement-img-1.jpg",
        promo: true
    },
    {
        id: 8,
        title: "task.ly",
        text: "2022 - UX/UI",
        image: "/img/section-advancement/section-advancement-img-2.jpg",
        promo: false
    },
    {
        id: 9,
        title: "Maniere",
        text: "2022 - Web Development",
        image: "/img/section-advancement/section-advancement-img-1.jpg",
        promo: true
    },
    {
        id: 10,
        title: "Hoomie",
        text: "2023 - UX/UI & App Development",
        image: "/img/section-advancement/section-advancement-img-2.jpg",
        promo: false
    },
];

export const dataTeam: Array<{ id: number; name: string; role: string; image: string;}> = [
    {
        id: 1,
        name: "Peter Robertson",
        role: "Chief Operating Officer",
        image: "/img/section-meet-team/meet-team-1.jpg",
    },
    {
        id: 2,
        name: "Courtney Henry",
        role: "General Manager",
        image: "/img/section-meet-team/meet-team-2.jpg",
    },
    {
        id: 3,
        name: "Bessie Cooper",
        role: "Chief Software Architect",
        image: "/img/section-meet-team/meet-team-3.jpg",
    },
    {
        id: 4,
        name: "Sara McKinney",
        role: "Vice President, Creative & Design",
        image: "/img/section-meet-team/meet-team-4.jpg",
    },
    {
        id: 5,
        name: "Steve Howard",
        role: "Creative Project Manager",
        image: "/img/section-meet-team/meet-team-5.jpg",
    },
    {
        id: 6,
        name: "ALVIN Russell",
        role: "Developer Project Manager",
        image: "/img/section-meet-team/meet-team-6.jpg",
    },
    {
        id: 7,
        name: "Eleanor Pena",
        role: "Digital Transform Project Manager",
        image: "/img/section-meet-team/meet-team-7.jpg",
    },
    {
        id: 8,
        name: "Cody Fisher",
        role: "Creative Project Manager",
        image: "/img/section-meet-team/meet-team-8.jpg",
    }
];

export const dataRelatedArticles: Array<{ id: number; title: string; text: string; image: string; promo: boolean}> = [
  {
      id: 1,
      title: "What makes your design awesome?",
      text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
      image: "/img/section-posts/post-img-4.jpg",
      promo: true
  },
  {
      id: 2,
      title: "Email Love - Email Inspiration, Templates and Discovery",
      text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
      image: "/img/section-posts/post-img-3.jpg",
      promo: false
  },
  {
      id: 3,
      title: "How to create SVG-ready icon symbols in Sketch",
      text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
      image: "/img/section-posts/post-img-1.jpg",
      promo: true
  },
  {
      id: 4,
      title: "What makes your design awesome?",
      text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
      image: "/img/section-posts/post-img-2.jpg",
      promo: false
  },
  {
      id: 5,
      title: "Email Love - Email Inspiration, Templates and Discovery",
      text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
      image: "/img/section-posts/post-img-4.jpg",
      promo: true
  },
  {
      id: 6,
      title: "How to create SVG-ready icon symbols in Sketch",
      text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
      image: "/img/section-posts/post-img-3.jpg",
      promo: false
  },
  {
      id: 7,
      title: "What makes your design awesome?",
      text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
      image: "/img/section-posts/post-img-1.jpg",
      promo: true
  },
  {
      id: 8,
      title: "Email Love - Email Inspiration, Templates and Discovery",
      text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
      image: "/img/section-posts/post-img-2.jpg",
      promo: false
  },
  {
      id: 9,
      title: "How to create SVG-ready icon symbols in Sketch",
      text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
      image: "/img/section-posts/post-img-4.jpg",
      promo: true
  },
  {
      id: 10,
      title: "What makes your design awesome?",
      text: "Our suite of services is designed to cater to every aspect of your online presence, from boosting your visibility to engaging your audience and driving conversions.",
      image: "/img/section-posts/post-img-3.jpg",
      promo: false
  },
];

export type Category = 'All' | 'Branding' | 'UX/UI Design' | 'App Development' | 'Web Development' | 'Digital Transformation';

interface Images {
  image: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
}

interface Project {
  id: number;
  title: string;
  text: string;
  image: string;
  category: Category;
  images: Images;
}

export const dataProjects: Project[] = [
  { 
    id: 1, 
    title: 'Hoomie',
    text: 'Branding', 
    category: 'Branding', 
    image: "/img/section-projects/projects/project-1.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 2, 
    title: 'Task.ly', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-2.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 3, 
    title: 'Maniere', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-3.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 4, 
    title: 'Exhibition', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-4.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 5, 
    title: 'Home big', 
    text: 'Digital Transformation',
    category: 'Digital Transformation', 
    image: "/img/section-projects/projects/project-5.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 6, 
    title: 'Template', 
    text: 'Branding',
    category: 'Branding', 
    image: "/img/section-projects/projects/project-6.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 7, 
    title: 'Celtic', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-7.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 8, 
    title: 'Clorina Red', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-8.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 9, 
    title: 'Cloverly', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-9.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 10, 
    title: 'D&I',
    text: 'Branding', 
    category: 'Branding', 
    image: "/img/section-projects/projects/project-10.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 11, 
    title: 'Gato', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-11.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 12, 
    title: 'Ipso', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-12.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 13, 
    title: 'HOOMIE', 
    text: 'Mobile Book',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-13.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 14, 
    title: 'Poster', 
    text: 'Digital Transformation',
    category: 'Digital Transformation', 
    image: "/img/section-projects/projects/project-14.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 15, 
    title: 'VIP 457 Slides', 
    text: 'Branding',
    category: 'Branding', 
    image: "/img/section-projects/projects/project-15.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 16, 
    title: 'Visual Ly', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-16.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 17, 
    title: 'Your Choige', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-17.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 18, 
    title: 'une Watch', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-18.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },{ 
    id: 19, 
    title: 'Denobank',
    text: 'Branding', 
    category: 'Branding', 
    image: "/img/section-projects/projects/project-19.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 20, 
    title: 'Forthcoming Studio', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-20.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 21, 
    title: 'Hile', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-21.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 22, 
    title: 'HKB Heab', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-22.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 23, 
    title: 'Hoomie APP', 
    text: 'Digital Transformation',
    category: 'Digital Transformation', 
    image: "/img/section-projects/projects/project-23.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 24, 
    title: 'Kindness', 
    text: 'Branding',
    category: 'Branding', 
    image: "/img/section-projects/projects/project-24.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 25, 
    title: 'Maniere APP', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-25.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 26, 
    title: 'Task Ly Web', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-26.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 27, 
    title: 'Typography', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-27.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },{ 
    id: 28, 
    title: 'Calendar',
    text: 'Branding', 
    category: 'Branding', 
    image: "/img/section-projects/projects/project-28.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 29, 
    title: 'Genre', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-29.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 30, 
    title: 'Hoomie Technolog', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-30.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 31, 
    title: 'Maniere Technolog', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-31.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 32, 
    title: 'People', 
    text: 'Digital Transformation',
    category: 'Digital Transformation', 
    image: "/img/section-projects/projects/project-32.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 33, 
    title: 'Personal Trainer', 
    text: 'Branding',
    category: 'Branding', 
    image: "/img/section-projects/projects/project-33.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 34, 
    title: 'Sport Point', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-34.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 35, 
    title: 'Tasky Ly Technolog', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-35.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 36, 
    title: 'Toka Factory', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-36.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  }
  ,{ 
    id: 37, 
    title: 'Apocalypse',
    text: 'Branding', 
    category: 'Branding', 
    image: "/img/section-projects/projects/project-37.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 38, 
    title: 'Hoomie Digital', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-38.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 39, 
    title: 'Live Play', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-39.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 40, 
    title: 'Maniere Digital', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-40.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 41, 
    title: 'Marketing', 
    text: 'Digital Transformation',
    category: 'Digital Transformation', 
    image: "/img/section-projects/projects/project-41.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 42, 
    title: 'Nevada Shop', 
    text: 'Branding',
    category: 'Branding', 
    image: "/img/section-projects/projects/project-42.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 43, 
    title: 'Open Heart', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-43.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 44, 
    title: 'Sport', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-44.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 45, 
    title: 'Task Ly Digital', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-45.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 46, 
    title: 'Hoomie',
    text: 'Branding', 
    category: 'Branding', 
    image: "/img/section-projects/projects/project-46.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 47, 
    title: 'Task.ly', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-47.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 48, 
    title: 'Maniere', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-48.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 49, 
    title: 'Exhibition', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-49.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 50, 
    title: 'Home big', 
    text: 'Digital Transformation',
    category: 'Digital Transformation', 
    image: "/img/section-projects/projects/project-50.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 51, 
    title: 'Template', 
    text: 'Branding',
    category: 'Branding', 
    image: "/img/section-projects/projects/project-51.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 52, 
    title: 'Celtic', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-52.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 53, 
    title: 'Clorina Red', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-53.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 54, 
    title: 'Cloverly', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-54.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 55, 
    title: 'D&I',
    text: 'Branding', 
    category: 'Branding', 
    image: "/img/section-projects/projects/project-55.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 56, 
    title: 'Gato', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-56.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 57, 
    title: 'Ipso', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-57.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 58, 
    title: 'Poster', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-58.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 59, 
    title: 'VIP 457 Slides', 
    text: 'Digital Transformation',
    category: 'Digital Transformation', 
    image: "/img/section-projects/projects/project-59.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 60, 
    title: 'Visual Ly', 
    text: 'Branding',
    category: 'Branding', 
    image: "/img/section-projects/projects/project-60.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 61, 
    title: 'une Watch', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-61.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 62, 
    title: 'Denobank', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-62.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 63, 
    title: 'Forthcoming Studio', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-63.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 64, 
    title: 'Hile',
    text: 'Branding', 
    category: 'Branding', 
    image: "/img/section-projects/projects/project-64.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 65, 
    title: 'HKB Heab', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-65.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 66, 
    title: 'Hoomie APP', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-66.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 67, 
    title: 'Kindness', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-67.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 68, 
    title: 'Maniere APP', 
    text: 'Digital Transformation',
    category: 'Digital Transformation', 
    image: "/img/section-projects/projects/project-68.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 69, 
    title: 'Task Ly Web', 
    text: 'Branding',
    category: 'Branding', 
    image: "/img/section-projects/projects/project-69.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 70, 
    title: 'Typography', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-70.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 71, 
    title: 'Calendar', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-71.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 72, 
    title: 'Genre', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-72.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 73, 
    title: 'Hoomie Technolog',
    text: 'Branding', 
    category: 'Branding', 
    image: "/img/section-projects/projects/project-73.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 74, 
    title: 'Maniere Technolog', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-74.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 75, 
    title: 'Personal Trainer', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-75.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 76, 
    title: 'Sport Point', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-76.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 77, 
    title: 'Tasky Ly Technolog', 
    text: 'Digital Transformation',
    category: 'Digital Transformation', 
    image: "/img/section-projects/projects/project-77.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 78, 
    title: 'Toka Factory', 
    text: 'Branding',
    category: 'Branding', 
    image: "/img/section-projects/projects/project-78.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 79, 
    title: 'Apocalypse', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-79.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 80, 
    title: 'Hoomie Digital', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-80.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 81, 
    title: 'Live Play', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-9.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 82, 
    title: 'Maniere Digital',
    text: 'Branding', 
    category: 'Branding', 
    image: "/img/section-projects/projects/project-82.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 83, 
    title: 'Marketing', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-83.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 84, 
    title: 'Nevada Shop', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-84.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 85, 
    title: 'Open Heart', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-85.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 86, 
    title: 'Sport', 
    text: 'Digital Transformation',
    category: 'Digital Transformation', 
    image: "/img/section-projects/projects/project-86.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 87, 
    title: 'Task Ly Digital', 
    text: 'Branding',
    category: 'Branding', 
    image: "/img/section-projects/projects/project-87.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 88, 
    title: 'Personal Trainer', 
    text: 'App Development',
    category: 'App Development', 
    image: "/img/section-projects/projects/project-88.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 89, 
    title: 'Sport Point', 
    text: 'Web Development',
    category: 'Web Development', 
    image: "/img/section-projects/projects/project-89.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
  { 
    id: 90, 
    title: 'Toka Factory', 
    text: 'UX/UI Design',
    category: 'UX/UI Design', 
    image: "/img/section-projects/projects/project-90.webp",

    images: {
      image: "/img/section-projects/projects/project/section-project-details-img-1.jpg",
      image2: "/img/section-projects/projects/project/section-project-details-img-2.jpg",
      image3: "/img/section-projects/projects/project/section-project-details-img-3.jpg",
      image4: "/img/section-projects/projects/project/section-project-details-img-4.jpg",
      image5: "/img/section-projects/projects/project/section-project-details-img-5.jpg",
    }
  },
];