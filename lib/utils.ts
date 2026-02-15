import { AITool, FilterState } from '@/types';

/**
 * Recommendation engine - matches user query with relevant AI tools
 * Uses keyword matching and scoring algorithm
 */
export function getRecommendedTools(
  query: string,
  allTools: AITool[],
  limit: number = 6
): AITool[] {
  if (!query || query.trim() === '') {
    // Return trending tools when no query
    return allTools
      .filter(tool => tool.trending)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  }

  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 2);
  
  // Score each tool based on relevance
  const scoredTools = allTools.map(tool => {
    let score = 0;
    const searchableText = [
      tool.name,
      tool.description,
      tool.category,
      ...tool.tags,
      tool.longDescription || '',
    ].join(' ').toLowerCase();

    searchTerms.forEach(term => {
      // Exact matches in name get highest score
      if (tool.name.toLowerCase().includes(term)) {
        score += 10;
      }
      
      // Tags and category matches
      if (tool.tags.some(tag => tag.includes(term))) {
        score += 7;
      }
      
      if (tool.category.toLowerCase().includes(term)) {
        score += 5;
      }
      
      // Description matches
      if (tool.description.toLowerCase().includes(term)) {
        score += 3;
      }
      
      // General text match
      if (searchableText.includes(term)) {
        score += 1;
      }
    });

    // Boost for verified and trending tools
    if (tool.verified) score += 2;
    if (tool.trending) score += 1;
    
    // Boost by rating
    score += tool.rating * 0.5;

    return { tool, score };
  });

  // Filter and sort by score
  return scoredTools
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.tool);
}

/**
 * Filter tools based on user-selected filters
 */
export function filterTools(tools: AITool[], filters: FilterState): AITool[] {
  return tools.filter(tool => {
    // Category filter
    if (filters.category !== 'All' && tool.category !== filters.category) {
      return false;
    }

    // Pricing filter
    if (filters.pricing !== 'All' && tool.pricing !== filters.pricing) {
      return false;
    }

    // Rating filter
    if (tool.rating < filters.minRating) {
      return false;
    }

    // Trending filter
    if (filters.showTrending && !tool.trending) {
      return false;
    }

    // Search query filter
    if (filters.searchQuery) {
      const searchText = [
        tool.name,
        tool.description,
        tool.category,
        ...tool.tags,
      ].join(' ').toLowerCase();
      
      const query = filters.searchQuery.toLowerCase();
      if (!searchText.includes(query)) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Get tools by category
 */
export function getToolsByCategory(
  tools: AITool[],
  category: string
): AITool[] {
  return tools
    .filter(tool => tool.category === category)
    .sort((a, b) => b.rating - a.rating);
}

/**
 * Get trending tools
 */
export function getTrendingTools(tools: AITool[], limit: number = 6): AITool[] {
  return tools
    .filter(tool => tool.trending)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

/**
 * Get new tools
 */
export function getNewTools(tools: AITool[], limit: number = 6): AITool[] {
  return tools
    .filter(tool => tool.new)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

/**
 * Search suggestions based on common queries
 */
export const searchSuggestions = [
  'I want to create YouTube videos',
  'Help me write blog posts',
  'Generate images for social media',
  'Build a website faster',
  'Automate email marketing',
  'Create presentation slides',
  'Edit photos professionally',
  'Write better code',
  'Design a logo for my business',
  'Manage my tasks efficiently',
];

/**
 * Get random search suggestion
 */
export function getRandomSuggestion(): string {
  return searchSuggestions[Math.floor(Math.random() * searchSuggestions.length)];
}
