import fs from 'fs';
import matter from 'gray-matter';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import path from 'path';

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description?: string;
};

function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateString;
  }
}

function getReadingTime(description: string): string {
  const words = description.split(' ').length;
  const readingTime = Math.ceil(words / 200); // Average reading speed
  return `${readingTime} min read`;
}

export default function BlogList() {
  const blogDirectory = path.join(process.cwd(), 'content/blogs');
  const files = fs.readdirSync(blogDirectory);

  const posts: BlogPost[] = files.map((file) => {
    const slug = file.replace('.mdx', '');
    const filePath = path.join(blogDirectory, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || 'Unknown Date',
      description: data.description || '',
    };
  });

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:px-12">
      {/* Header Section */}
      <div className="mb-16">
        <div className="relative">
          <h1 className="mb-4 text-4xl font-bold text-zinc-100 sm:text-5xl">
            Latest{' '}
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-zinc-300 sm:text-xl">
            Thoughts on technology, development, and the ever-evolving world of
            AI.
          </p>

          {/* Subtle accent elements */}
          <div className="absolute -right-2 -top-2 h-3 w-3 animate-pulse-slow rounded-full bg-violet-500/20 blur-sm" />
          <div
            className="absolute -left-3 top-8 h-2 w-2 animate-pulse-slow rounded-full bg-purple-500/20 blur-sm"
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:gap-10">
        {sortedPosts.map(({ slug, title, date, description }, index) => (
          <article key={slug} className="group relative">
            <Link href={`/blog/${slug}`} className="block">
              <div className="relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-violet-600/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Meta information */}
                      <div className="mb-4 flex items-center gap-4 text-sm text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(date)}</span>
                        </div>
                        {description && (
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            <span>{getReadingTime(description)}</span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="mb-3 text-2xl font-bold text-zinc-100 transition-colors duration-300 group-hover:text-purple-300 sm:text-3xl">
                        {title}
                      </h2>

                      {/* Description */}
                      {description && (
                        <p className="mb-4 leading-relaxed text-zinc-300 sm:text-lg">
                          {description}
                        </p>
                      )}

                      {/* Read more link */}
                      <div className="flex items-center gap-2 font-medium text-purple-400 transition-colors duration-300 group-hover:text-purple-300">
                        <span>Read article</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>

                    {/* Post number indicator */}
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-purple-500/20 bg-gradient-to-br from-purple-500/20 to-violet-500/20 text-sm font-bold text-purple-300 backdrop-blur-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>

                {/* Subtle shine effect */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:animate-shimmer group-hover:opacity-100" />
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Empty state */}
      {sortedPosts.length === 0 && (
        <div className="py-16 text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/20">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500/40 to-violet-500/40" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-zinc-200">
            No posts yet
          </h3>
          <p className="text-zinc-400">Check back soon for new content!</p>
        </div>
      )}
    </main>
  );
}
