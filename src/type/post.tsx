export interface Post {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  content: string;
  date: string;
  modified: string;
  author: {
    node: {
      id: string;
      name: string;
    };
  };
  categories: {
    edges: {
      node: {
        id: string;
        name: string;
        slug: string;
        link: string;
      };
    }[];
  };
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  } | null;
}
