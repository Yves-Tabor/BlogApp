export interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
  excerpt: string;
}

export const postsData: Post[] = [
  { 
    id: 1, 
    title: "The Art of Component Composition", 
    content: "Exploring advanced patterns for building reusable React components through functional composition and hooks. In this comprehensive guide, we dive deep into the mental models and practical techniques that make React components truly composable and maintainable. From custom hooks to render props, from compound components to higher-order components, we'll explore when and how to use each pattern effectively.",
    category: "React",
    readTime: "8 min",
    date: "2024-11-20",
    featured: true,
    excerpt: "Exploring advanced patterns for building reusable React components through functional composition and hooks."
  },
  { 
    id: 2, 
    title: "TypeScript Design Patterns", 
    content: "Leveraging TypeScript's type system to create robust and maintainable application architectures. Discover how to use advanced TypeScript features like conditional types, template literal types, and mapped types to build type-safe applications that catch errors at compile time. We'll explore real-world examples of how major companies use TypeScript to scale their codebases while maintaining developer productivity.",
    category: "TypeScript",
    readTime: "12 min",
    date: "2024-11-15",
    excerpt: "Leveraging TypeScript's type system to create robust and maintainable application architectures."
  },
  { 
    id: 3, 
    title: "Modern CSS Architecture", 
    content: "Building scalable styling systems with CSS-in-JS, utility-first approaches, and design tokens. Learn how to create maintainable CSS architectures that scale with your application. We'll compare different approaches like CSS Modules, Styled Components, Emotion, and utility-first frameworks, helping you choose the right solution for your project needs.",
    category: "CSS",
    readTime: "6 min",
    date: "2024-11-10",
    excerpt: "Building scalable styling systems with CSS-in-JS, utility-first approaches, and design tokens."
  },
  { 
    id: 4, 
    title: "State Management Patterns", 
    content: "Understanding when and how to use different state management solutions in React applications. From local state to Context API, from Redux to Zustand, we'll explore the trade-offs and best practices for managing state in modern React applications. This guide includes practical examples and performance considerations.",
    category: "React",
    readTime: "10 min",
    date: "2024-11-05",
    excerpt: "Understanding when and how to use different state management solutions in React applications."
  },
  { 
    id: 5, 
    title: "Performance Optimization Techniques", 
    content: "Practical strategies for optimizing React application performance. Learn about code splitting, lazy loading, memoization, and other techniques to make your applications blazing fast. We'll cover both browser and server-side optimization strategies that can significantly improve your user experience.",
    category: "Performance",
    readTime: "15 min",
    date: "2024-10-28",
    excerpt: "Practical strategies for optimizing React application performance."
  },
  { 
    id: 6, 
    title: "Testing React Applications", 
    content: "Comprehensive guide to testing React components and applications. From unit tests with Jest and React Testing Library to integration tests and end-to-end testing with Cypress, we'll cover everything you need to know to ensure your applications are reliable and bug-free.",
    category: "Testing",
    readTime: "18 min",
    date: "2024-10-20",
    excerpt: "Comprehensive guide to testing React components and applications."
  }
];
