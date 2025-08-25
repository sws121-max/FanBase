import { Template } from '../types/Template';

export const templates: Template[] = [
  {
    id: 'ecom-1',
    name: 'Modern Store',
    category: 'ecommerce',
    thumbnail: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=800',
    preview: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200',
    header: {
      type: 'navbar',
      title: 'ModernStore',
      navigation: ['Home', 'Products', 'Categories', 'About', 'Contact'],
      hasSearch: true,
      style: 'bg-white shadow-sm border-b'
    },
    body: {
      sections: [
        {
          id: 'hero-1',
          type: 'hero',
          title: 'Discover Amazing Products',
          content: 'Shop the latest trends with unbeatable prices and quality.',
          style: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white',
          editable: true
        },
        {
          id: 'products-1',
          type: 'products',
          title: 'Featured Products',
          content: 'Explore our handpicked selection of premium products.',
          style: 'bg-gray-50',
          editable: true
        }
      ]
    },
    footer: {
      type: 'detailed',
      content: '© 2025 ModernStore. All rights reserved.',
      links: ['Privacy Policy', 'Terms of Service', 'Support'],
      style: 'bg-gray-900 text-white'
    },
    colors: {
      primary: '#3B82F6',
      secondary: '#8B5CF6',
      accent: '#10B981',
      text: '#1F2937',
      background: '#FFFFFF'
    }
  },
  {
    id: 'ecom-2',
    name: 'Fashion Hub',
    category: 'ecommerce',
    thumbnail: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=800',
    preview: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1200',
    header: {
      type: 'hero',
      title: 'Fashion Hub',
      navigation: ['Collections', 'New Arrivals', 'Sale', 'Blog'],
      hasSearch: true,
      style: 'bg-black text-white'
    },
    body: {
      sections: [
        {
          id: 'hero-2',
          type: 'hero',
          title: 'Style Redefined',
          content: 'Discover the latest fashion trends and express your unique style.',
          style: 'bg-gradient-to-br from-pink-500 to-purple-700 text-white',
          editable: true
        },
        {
          id: 'gallery-1',
          type: 'gallery',
          title: 'New Collections',
          content: 'Explore our seasonal collections and trending pieces.',
          style: 'bg-white',
          editable: true
        }
      ]
    },
    footer: {
      type: 'social',
      content: '© 2025 Fashion Hub. Style never goes out of fashion.',
      links: ['Instagram', 'Twitter', 'Facebook', 'Pinterest'],
      style: 'bg-black text-white'
    },
    colors: {
      primary: '#EC4899',
      secondary: '#8B5CF6',
      accent: '#F59E0B',
      text: '#111827',
      background: '#FFFFFF'
    }
  },
  {
    id: 'biz-1',
    name: 'Corporate Pro',
    category: 'business',
    thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    preview: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200',
    header: {
      type: 'navbar',
      title: 'CorporatePro',
      navigation: ['Home', 'Services', 'About', 'Portfolio', 'Contact'],
      hasSearch: false,
      style: 'bg-white shadow-md'
    },
    body: {
      sections: [
        {
          id: 'hero-3',
          type: 'hero',
          title: 'Professional Solutions',
          content: 'Empowering businesses with innovative strategies and cutting-edge technology.',
          style: 'bg-gradient-to-r from-gray-800 to-blue-800 text-white',
          editable: true
        },
        {
          id: 'features-1',
          type: 'features',
          title: 'Our Services',
          content: 'Comprehensive business solutions tailored to your needs.',
          style: 'bg-white',
          editable: true
        }
      ]
    },
    footer: {
      type: 'detailed',
      content: '© 2025 CorporatePro. Excellence in every solution.',
      links: ['Services', 'Case Studies', 'Careers', 'Contact'],
      style: 'bg-gray-900 text-white'
    },
    colors: {
      primary: '#1E40AF',
      secondary: '#6B7280',
      accent: '#10B981',
      text: '#374151',
      background: '#F9FAFB'
    }
  },
  {
    id: 'port-1',
    name: 'Creative Portfolio',
    category: 'portfolio',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    preview: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    header: {
      type: 'minimal',
      title: 'Alex Designer',
      navigation: ['Work', 'About', 'Contact'],
      hasSearch: false,
      style: 'bg-transparent text-white absolute top-0 left-0 right-0 z-10'
    },
    body: {
      sections: [
        {
          id: 'hero-4',
          type: 'hero',
          title: 'Creative Vision',
          content: 'Bringing ideas to life through innovative design and artistic expression.',
          style: 'bg-gradient-to-br from-purple-900 to-blue-900 text-white min-h-screen flex items-center',
          editable: true
        },
        {
          id: 'gallery-2',
          type: 'gallery',
          title: 'Featured Work',
          content: 'A showcase of recent projects and creative endeavors.',
          style: 'bg-gray-50',
          editable: true
        }
      ]
    },
    footer: {
      type: 'minimal',
      content: '© 2025 Alex Designer. Creating beautiful experiences.',
      links: ['Behance', 'Dribbble', 'Instagram'],
      style: 'bg-white border-t'
    },
    colors: {
      primary: '#7C3AED',
      secondary: '#1E40AF',
      accent: '#F59E0B',
      text: '#1F2937',
      background: '#FFFFFF'
    }
  },
  {
    id: 'blog-1',
    name: 'Modern Blog',
    category: 'blog',
    thumbnail: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800',
    preview: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1200',
    header: {
      type: 'navbar',
      title: 'Modern Blog',
      navigation: ['Home', 'Articles', 'Categories', 'About', 'Contact'],
      hasSearch: true,
      style: 'bg-white border-b-2 border-blue-500'
    },
    body: {
      sections: [
        {
          id: 'hero-5',
          type: 'hero',
          title: 'Stories Worth Reading',
          content: 'Discover insights, tutorials, and inspiration for modern living.',
          style: 'bg-gradient-to-r from-green-400 to-blue-500 text-white',
          editable: true
        },
        {
          id: 'about-1',
          type: 'about',
          title: 'Latest Articles',
          content: 'Stay updated with our latest posts and featured content.',
          style: 'bg-white',
          editable: true
        }
      ]
    },
    footer: {
      type: 'social',
      content: '© 2025 Modern Blog. Sharing knowledge, inspiring minds.',
      links: ['RSS', 'Twitter', 'LinkedIn', 'Medium'],
      style: 'bg-gray-800 text-white'
    },
    colors: {
      primary: '#059669',
      secondary: '#3B82F6',
      accent: '#F59E0B',
      text: '#374151',
      background: '#FFFFFF'
    }
  }
];