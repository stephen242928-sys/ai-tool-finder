// Type definitions for the AI Tool Finder application

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategories: string[];
  pricing: 'Free' | 'Paid' | 'Freemium';
  rating: number;
  logo: string;
  tags: string[];
  features: string[];
  url: string;
  trending: boolean;
}

export interface FilterState {
  category: string;
  pricing: string;
  rating: number;
  trending: boolean;
  searchQuery: string;
}

export type Category = {
  name: string;
  icon: string;
  description: string;
  count?: number;
};
