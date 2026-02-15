'use client';

import { AITool } from '@/types';
import { Star, ExternalLink, TrendingUp, Sparkles } from 'lucide-react';

interface ToolCardProps {
  tool: AITool;
}

/**
 * ToolCard - Display individual AI tool in a card format
 * Features: Logo, name, description, rating, pricing, tags
 */
export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="glass rounded-2xl p-6 card-hover group relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 to-emerald-500/5" />
      
      {/* Trending badge */}
      {tool.trending && (
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-2 py-1 rounded-full">
          <TrendingUp className="w-3 h-3" />
          Trending
        </div>
      )}
      
      {/* New badge */}
      {tool.new && (
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full">
          <Sparkles className="w-3 h-3" />
          New
        </div>
      )}
      
      <div className="relative z-10">
        {/* Logo and header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center text-2xl border border-white/10">
              {tool.logo}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                {tool.name}
                {tool.verified && (
                  <span className="text-cyan-400" title="Verified">
                    ✓
                  </span>
                )}
              </h3>
              <p className="text-xs text-gray-400">{tool.category}</p>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
          {tool.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Rating and pricing */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-semibold text-white">
                {tool.rating.toFixed(1)}
              </span>
            </div>
            <span className="text-xs text-gray-400">
              ({tool.reviewCount.toLocaleString()})
            </span>
          </div>
          
          <div>
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${
              tool.pricing === 'Free' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : tool.pricing === 'Freemium'
                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
            }`}>
              {tool.pricing}
            </span>
          </div>
        </div>
        
        {/* CTA Button */}
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white py-2.5 rounded-xl font-medium hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/30"
        >
          Visit Tool
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
