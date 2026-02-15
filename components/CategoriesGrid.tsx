'use client';

import { motion } from 'framer-motion';
import { Category } from '@/lib/types';

interface CategoriesGridProps {
  onCategorySelect: (category: string) => void;
}

const categories: Category[] = [
  {
    name: 'Writing',
    icon: '✍️',
    description: 'AI writing assistants, content creation, and copywriting tools',
  },
  {
    name: 'Image Generation',
    icon: '🎨',
    description: 'Create stunning visuals, artwork, and designs with AI',
  },
  {
    name: 'Video Creation',
    icon: '🎬',
    description: 'Video editing, generation, and production tools',
  },
  {
    name: 'Coding',
    icon: '💻',
    description: 'AI-powered development, code completion, and debugging',
  },
  {
    name: 'Marketing',
    icon: '📢',
    description: 'Marketing automation, copywriting, and campaign tools',
  },
  {
    name: 'Productivity',
    icon: '⚡',
    description: 'Task management, automation, and workflow optimization',
  },
  {
    name: 'Business',
    icon: '💼',
    description: 'CRM, analytics, and business intelligence solutions',
  },
  {
    name: 'Education',
    icon: '🎓',
    description: 'Learning platforms, tutoring, and educational tools',
  },
  {
    name: 'Audio',
    icon: '🎙️',
    description: 'Voice generation, audio editing, and music creation',
  },
  {
    name: 'Research',
    icon: '🔍',
    description: 'Search engines, data analysis, and research assistants',
  },
];

export default function CategoriesGrid({ onCategorySelect }: CategoriesGridProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Explore by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Browse AI tools organized by their primary use case
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => onCategorySelect(category.name)}
              className="group relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute -inset-px bg-gradient-to-r from-accent-cyan/30 via-accent-purple/30 to-accent-pink/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

              <div className="relative glass rounded-2xl p-6 h-full hover-lift transition-all duration-300 text-left">
                {/* Icon */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>

                {/* Name */}
                <h3 className="font-display font-bold text-lg mb-2 text-text-primary group-hover:text-accent-cyan transition-colors">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary line-clamp-2">
                  {category.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center gap-2 text-accent-cyan text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
