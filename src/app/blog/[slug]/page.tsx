import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import path from 'path';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const getPost = (slug: string) => {
  const filePath = path.join(process.cwd(), 'content/blogs', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  return { content, meta: data };
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-3xl p-6 text-gray-300">
      <h1 className="text-4xl font-bold text-white">{post.meta.title}</h1>
      <p className="mt-1 text-sm text-gray-500">{post.meta.date}</p>
      <div className="prose prose-invert dark:prose-invert mt-6 max-w-none">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                rehypeSlug,
                [
                  rehypePrettyCode,
                  {
                    theme: 'dracula',
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
