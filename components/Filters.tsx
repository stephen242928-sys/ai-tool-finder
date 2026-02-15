'use client';

import { FilterState, CategoryType, PricingType } from '@/types';
import { Filter, X } from 'lucide-react';

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  totalResults: number;
}

const categories: (CategoryType | 'All')[] = [
  'All',
  'Writing',
  'Image Generation',
  'Video Creation',
  'Coding',
  'Marketing',
  'Productivity',
  'Business',
  'Education',
  'Audio',
  'Design',
  'Data Analysis',
  'Customer Support',
];

const pricingOptions: (PricingType | 'All')[] = [
  'All',
  'Free',
  'Freemium',
  'Paid',
  'Free Trial',
];

/**
 * Filters Component - Filter tools by category, pricing, rating, trending
 */
export default function Filters({ filters, onFilterChange, totalResults }: FiltersProps) {
  const handleCategoryChange = (category: CategoryType | 'All') => {
    onFilterChange({ ...filters, category });
  };

  const handlePricingChange = (pricing: PricingType | 'All') => {
    onFilterChange({ ...filters, pricing });
  };

  const handleRatingChange = (minRating: number) => {
    onFilterChange({ ...filters, minRating });
  };

  const handleTrendingToggle = () => {
    onFilterChange({ ...filters, showTrending: !filters.showTrending });
  };

  const resetFilters = () => {
    onFilterChange({
      category: 'All',
      pricing: 'All',
      minRating: 0,
      showTrending: false,
      searchQuery: '',
    });
  };

  const hasActiveFilters = 
    filters.category !== 'All' || 
    filters.pricing !== 'All' || 
    filters.minRating > 0 || 
    filters.showTrending;

  return (
    <div className="glass rounded-2xl p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-cyan-400" />
          <h3 className="text-lg font-semibold text-white">Filters</h3>
          <span className="text-sm text-gray-400">
            ({totalResults} {totalResults === 1 ? 'result' : 'results'})
          </span>
        </div>
        
        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
            Reset
          </button>
        )}
      </div>

      {/* Filter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleCategoryChange(e.target.value as CategoryType | 'All')}
            className="w-full bg-dark-100 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:border-cyan-500 transition-colors"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Pricing Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Pricing
          </label>
          <select
            value={filters.pricing}
            onChange={(e) => handlePricingChange(e.target.value as PricingType | 'All')}
            className="w-full bg-dark-100 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:border-cyan-500 transition-colors"
          >
            {pricingOptions.map((pricing) => (
              <option key={pricing} value={pricing}>
                {pricing}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Minimum Rating
          </label>
          <select
            value={filters.minRating}
            onChange={(e) => handleRatingChange(Number(e.target.value))}
            className="w-full bg-dark-100 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:border-cyan-500 transition-colors"
          >
            <option value={0}>All Ratings</option>
            <option value={3}>3+ Stars</option>
            <option value={4}>4+ Stars</option>
            <option value={4.5}>4.5+ Stars</option>
          </select>
        </div>

        {/* Trending Toggle */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Show Only
          </label>
          <button
            onClick={handleTrendingToggle}
            className={`w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              filters.showTrending
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/30'
                : 'bg-dark-100 border border-white/10 text-gray-300 hover:bg-white/5'
            }`}
          >
            {filters.showTrending ? '🔥 Trending Only' : 'All Tools'}
          </button>
        </div>
      </div>
    </div>
  );
}
