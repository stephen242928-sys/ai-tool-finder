import type { Metadata } from 'next';
import './globals.css';

/**
 * Root Layout - Application wrapper with metadata
 */
export const metadata: Metadata = {
  title: 'AI Tool Finder - Discover the Best AI Tools',
  description: 'Explore our curated collection of AI-powered tools to boost your productivity, creativity, and efficiency. From writing to coding, find the perfect AI tool for your needs.',
  keywords: 'AI tools, artificial intelligence, productivity, writing tools, image generation, video creation, coding tools, marketing tools',
  authors: [{ name: 'AI Tool Finder Team' }],
  openGraph: {
    title: 'AI Tool Finder - Discover the Best AI Tools',
    description: 'Find the perfect AI tool for your needs from our curated collection',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
