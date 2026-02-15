'use client';

import { categories } from '@/data/tools';
import { CategoryType } from '@/types';
import { ArrowRight } from 'lucide-react';

interface CategoriesProps {
  onCategoryClick: (category: CategoryType) => void;
}

/**
 * Categories Component - Interactive grid of category cards
 */
export default function Categories({ onCategoryClick }: CategoriesProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Explore by <span className="gradient-text">Category</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Browse AI tools organized by use case to find exactly what you need
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => onCategoryClick(category.name)}
              className="group relative glass rounded-2xl p-6 text-left overflow-hidden card-hover"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-4xl mb-4 float">
                  {category.icon}
                </div>

                {/* Category info */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center justify-between">
                    {category.name}
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-sm text-gray-400">
                    {category.description}
                  </p>
                </div>

                {/* Tool count */}
                <div className="flex items-center gap-2">
                  <div className={`h-1 flex-1 rounded-full bg-gradient-to-r ${category.gradient} opacity-30`} />
                  <span className="text-xs text-gray-500 font-medium">
                    {category.toolCount} tools
                  </span>
                </div>
              </div>

              {/* Hover border effect */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${category.gradient} blur-sm -z-10`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
