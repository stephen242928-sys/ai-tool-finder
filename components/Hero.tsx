'use client';

import { useState, useEffect } from 'react';
import { Search, Mic, Sparkles } from 'lucide-react';
import { getRandomSuggestion, searchSuggestions } from '@/lib/utils';

interface HeroProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
}

/**
 * Hero Section - Main landing area with search
 * Features: Large heading, search input, animated placeholders, voice input UI
 */
export default function Hero({ onSearch, initialQuery = '' }: HeroProps) {
  const [query, setQuery] = useState(initialQuery);
  const [placeholder, setPlaceholder] = useState(getRandomSuggestion());
  const [isTyping, setIsTyping] = useState(false);

  // Animated placeholder rotation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTyping) {
        setPlaceholder(getRandomSuggestion());
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isTyping]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleQuickSearch = (suggestion: string) => {
    setQuery(suggestion);
    onSearch(suggestion);
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-slide-down">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-gray-300">Discover 25+ AI Tools & Growing</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          <span className="gradient-text">Find the Perfect</span>
          <br />
          <span className="text-white">AI Tool for Your Needs</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
          Explore our curated collection of AI-powered tools to boost your productivity,
          creativity, and efficiency. From writing to coding, we've got you covered.
        </p>

        {/* Search form */}
        <form onSubmit={handleSearch} className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative max-w-2xl mx-auto">
            <div className="glass-strong rounded-2xl p-2 flex items-center gap-2 glow-hover">
              {/* Search icon */}
              <div className="pl-4">
                <Search className="w-5 h-5 text-gray-400" />
              </div>

              {/* Input */}
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setIsTyping(true);
                }}
                onBlur={() => setIsTyping(false)}
                placeholder={placeholder}
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 text-lg px-2 py-3"
              />

              {/* Voice input (UI only) */}
              <button
                type="button"
                className="p-3 rounded-xl hover:bg-white/5 transition-colors"
                title="Voice search (coming soon)"
              >
                <Mic className="w-5 h-5 text-gray-400" />
              </button>

              {/* Search button */}
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                Search
              </button>
            </div>
          </div>
        </form>

        {/* Quick search suggestions */}
        <div className="mt-8 flex flex-wrap gap-3 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <span className="text-sm text-gray-500">Popular:</span>
          {searchSuggestions.slice(0, 4).map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleQuickSearch(suggestion)}
              className="text-sm px-4 py-2 rounded-full glass hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
