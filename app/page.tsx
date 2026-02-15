'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Filters from '@/components/Filters';
import Recommendations from '@/components/Recommendations';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';
import { aiTools } from '@/data/tools';
import { getRecommendedTools, filterTools, getTrendingTools } from '@/lib/utils';
import { FilterState, CategoryType, AITool } from '@/types';

/**
 * Home Page - Main application page
 * Combines all components and manages state
 */
export default function Home() {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    category: 'All',
    pricing: 'All',
    minRating: 0,
    showTrending: false,
    searchQuery: '',
  });
  const [displayedTools, setDisplayedTools] = useState<AITool[]>([]);
  const [showRecommendations, setShowRecommendations] = useState(true);

  // Update displayed tools when filters or search changes
  useEffect(() => {
    if (searchQuery) {
      // Show search results
      const recommended = getRecommendedTools(searchQuery, aiTools, 50);
      const filtered = filterTools(recommended, filters);
      setDisplayedTools(filtered);
      setShowRecommendations(true);
    } else if (
      filters.category !== 'All' ||
      filters.pricing !== 'All' ||
      filters.minRating > 0 ||
      filters.showTrending
    ) {
      // Show filtered results
      const filtered = filterTools(aiTools, filters);
      setDisplayedTools(filtered);
      setShowRecommendations(true);
    } else {
      // Show trending by default
      const trending = getTrendingTools(aiTools, 6);
      setDisplayedTools(trending);
      setShowRecommendations(true);
    }
  }, [searchQuery, filters]);

  // Handle search from Hero component
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setFilters({
      ...filters,
      searchQuery: query,
    });
    
    // Scroll to results
    setTimeout(() => {
      const element = document.getElementById('results');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Handle category click from Categories component
  const handleCategoryClick = (category: CategoryType) => {
    setSearchQuery('');
    setFilters({
      ...filters,
      category,
      searchQuery: '',
    });
    setShowRecommendations(true);
    
    // Scroll to results
    setTimeout(() => {
      const element = document.getElementById('results');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Handle filter changes
  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    if (newFilters.searchQuery !== searchQuery) {
      setSearchQuery(newFilters.searchQuery);
    }
  };

  return (
    <main className="min-h-screen bg-dark-50">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero onSearch={handleSearch} initialQuery={searchQuery} />

      {/* Results Section */}
      {showRecommendations && (
        <div id="results" className="scroll-mt-20">
          {/* Filters */}
          <div className="max-w-7xl mx-auto px-4">
            <Filters
              filters={filters}
              onFilterChange={handleFilterChange}
              totalResults={displayedTools.length}
            />
          </div>

          {/* Recommendations */}
          <Recommendations
            tools={displayedTools}
            query={searchQuery}
            showTrending={filters.showTrending && !searchQuery}
          />
        </div>
      )}

      {/* Categories Section */}
      <div id="categories">
        <Categories onCategoryClick={handleCategoryClick} />
      </div>

      {/* Trending Section */}
      <div id="trending">
        <Recommendations
          tools={getTrendingTools(aiTools, 6)}
          title="🔥 Trending This Week"
          subtitle="Most popular AI tools right now"
          showTrending={true}
        />
      </div>

      {/* Features Section - Structure for future */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-dark-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Coming <span className="gradient-text">Soon</span>
            </h2>
            <p className="text-lg text-gray-400">
              We're working on exciting new features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🔖',
                title: 'Bookmarks',
                description: 'Save your favorite tools for quick access',
              },
              {
                icon: '🕒',
                title: 'History',
                description: 'Track tools you\'ve recently viewed',
              },
              {
                icon: '⚖️',
                title: 'Comparison',
                description: 'Compare features and pricing side-by-side',
              },
              {
                icon: '🔔',
                title: 'Alerts',
                description: 'Get notified when new tools are added',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
