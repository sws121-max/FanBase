export interface Template {
  id: string;
  name: string;
  category: 'ecommerce' | 'business' | 'portfolio' | 'blog';
  thumbnail: string;
  preview: string;
  header: {
    type: 'navbar' | 'hero' | 'minimal';
    title: string;
    navigation: string[];
    hasSearch: boolean;
    style: string;
  };
  body: {
    sections: Section[];
  };
  footer: {
    type: 'minimal' | 'detailed' | 'social';
    content: string;
    links: string[];
    style: string;
  };
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
  };
}

export interface Section {
  id: string;
  type: 'hero' | 'features' | 'gallery' | 'testimonials' | 'contact' | 'products' | 'about';
  title: string;
  content: string;
  style: string;
  editable: boolean;
}