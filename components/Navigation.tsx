'use client';

import { useState } from 'react';
import { Menu, X, Sparkles, Bookmark, History, GitCompare, User } from 'lucide-react';

/**
 * Navigation - Top navigation bar
 * Future features: Auth, bookmarks, history, comparison
 */
export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Explore', href: '#', active: true },
    { name: 'Categories', href: '#categories' },
    { name: 'Trending', href: '#trending' },
  ];

  const futureFeatures = [
    { name: 'Bookmarks', icon: Bookmark, badge: 'Soon' },
    { name: 'History', icon: History, badge: 'Soon' },
    { name: 'Compare', icon: GitCompare, badge: 'Soon' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-strong border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">AI Tool Finder</h1>
              <p className="text-xs text-gray-500 hidden sm:block">Discover the best AI tools</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  item.active
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right side - Future features */}
          <div className="hidden lg:flex items-center gap-3">
            {futureFeatures.map((feature) => (
              <button
                key={feature.name}
                className="relative p-2 rounded-lg hover:bg-white/5 transition-colors text-gray-400 hover:text-white group"
                title={feature.name}
              >
                <feature.icon className="w-5 h-5" />
                {feature.badge && (
                  <span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 bg-cyan-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    {feature.badge}
                  </span>
                )}
              </button>
            ))}
            
            <div className="h-6 w-px bg-white/10 mx-2" />
            
            <button className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium text-gray-300 hover:text-white flex items-center gap-2">
              <User className="w-4 h-4" />
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 animate-slide-down">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-white/5 text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10">
              <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-sm font-medium">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
