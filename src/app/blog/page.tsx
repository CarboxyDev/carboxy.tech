import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description?: string;
};

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

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-8 text-4xl font-bold text-white">My Blog</h1>
      <div className="space-y-6">
        {posts.map(({ slug, title, date, description }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="relative block overflow-hidden rounded-xl bg-gradient-to-br from-[#1e1e2e] to-[#181825] p-6 shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl"
          >
            <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-r from-purple-600/30 to-blue-500/30 opacity-0 transition-opacity hover:opacity-100"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-gray-100">{title}</h2>
              <p className="mt-1 text-sm text-gray-400">{date}</p>
              {description && (
                <p className="mt-3 leading-relaxed text-gray-300">
                  {description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
