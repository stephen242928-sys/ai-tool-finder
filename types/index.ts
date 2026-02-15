/**
 * Core type definitions for AI Tool Finder
 */

export type PricingType = 'Free' | 'Paid' | 'Freemium' | 'Free Trial';

export type CategoryType = 
  | 'Writing'
  | 'Image Generation'
  | 'Video Creation'
  | 'Coding'
  | 'Marketing'
  | 'Productivity'
  | 'Business'
  | 'Education'
  | 'Audio'
  | 'Design'
  | 'Data Analysis'
  | 'Customer Support';

export interface AITool {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  logo: string;
  category: CategoryType;
  pricing: PricingType;
  priceDetails?: string;
  rating: number;
  reviewCount: number;
  url: string;
  tags: string[];
  features?: string[];
  trending?: boolean;
  new?: boolean;
  verified?: boolean;
}

export interface FilterState {
  category: CategoryType | 'All';
  pricing: PricingType | 'All';
  minRating: number;
  showTrending: boolean;
  searchQuery: string;
}

export interface CategoryCard {
  name: CategoryType;
  icon: string;
  description: string;
  toolCount: number;
  gradient: string;
}
