'use client';

import { AITool } from '@/types';
import ToolCard from './ToolCard';
import { Sparkles, TrendingUp } from 'lucide-react';

interface RecommendationsProps {
  tools: AITool[];
  query?: string;
  title?: string;
  subtitle?: string;
  showTrending?: boolean;
}

/**
 * Recommendations Section - Display recommended or filtered tools
 */
export default function Recommendations({ 
  tools, 
  query, 
  title,
  subtitle,
  showTrending = false 
}: RecommendationsProps) {
  // Determine section title and subtitle based on context
  const sectionTitle = title || (
    query 
      ? `Results for "${query}"` 
      : showTrending 
      ? 'Trending AI Tools'
      : 'Recommended AI Tools for You'
  );

  const sectionSubtitle = subtitle || (
    query
      ? `Found ${tools.length} tool${tools.length === 1 ? '' : 's'} matching your search`
      : showTrending
      ? 'Most popular tools right now'
      : 'Hand-picked tools based on your interests'
  );

  if (tools.length === 0) {
    return (
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-2xl p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              No tools found
            </h3>
            <p className="text-gray-400">
              Try adjusting your filters or search query
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            {showTrending ? (
              <TrendingUp className="w-6 h-6 text-orange-400" />
            ) : (
              <Sparkles className="w-6 h-6 text-cyan-400" />
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {sectionTitle}
            </h2>
          </div>
          <p className="text-gray-400">
            {sectionSubtitle}
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={tool.id}
              className="animate-scale-in"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>

        {/* Load more hint (structure for future pagination) */}
        {tools.length >= 6 && (
          <div className="mt-12 text-center">
            <button className="glass px-8 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300">
              Load More Tools
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
