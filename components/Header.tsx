'use client';

import { motion } from 'framer-motion';
import { Zap, Github, Twitter } from 'lucide-react';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 glass border-b border-white/5"
    >
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple blur-lg opacity-50" />
              <div className="relative p-2 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-xl">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="font-display font-bold text-xl text-text-primary">
                AI Tool Finder
              </h1>
              <p className="text-xs text-text-secondary">Discover • Compare • Accelerate</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#tools"
              className="text-sm font-semibold text-text-secondary hover:text-accent-cyan transition-colors"
            >
              Tools
            </a>
            <a
              href="#categories"
              className="text-sm font-semibold text-text-secondary hover:text-accent-cyan transition-colors"
            >
              Categories
            </a>
            <a
              href="#about"
              className="text-sm font-semibold text-text-secondary hover:text-accent-cyan transition-colors"
            >
              About
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-light rounded-lg hover:bg-accent-cyan/10 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5 text-text-secondary hover:text-accent-cyan transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-light rounded-lg hover:bg-accent-cyan/10 transition-colors"
              title="Twitter"
            >
              <Twitter className="w-5 h-5 text-text-secondary hover:text-accent-cyan transition-colors" />
            </a>
            <button className="hidden sm:block btn-primary text-sm px-6 py-2 rounded-lg font-display tracking-wide">
              SUBMIT TOOL
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
