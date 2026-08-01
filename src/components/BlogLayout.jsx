import React from 'react';
import { MDXProvider } from '@mdx-js/react';

const mdxComponents = {
  img: (props) => <img className="blog-post-image" loading="lazy" {...props} />,
  pre: (props) => <pre className="blog-code-block" {...props} />,
  code: (props) => <code className="blog-inline-code" {...props} />,
};

export default function BlogLayout({ blog, children }) {
  return (
    <main className="blog-post-page">
      <section className="blog-post-hero">
        <div className="container">
          <a className="blog-back-link" href="/blog">Back to blog</a>
          <div className="blog-post-meta">
            <span>{blog.category}</span>
            <time dateTime={blog.date}>
              {new Intl.DateTimeFormat('en', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(blog.date))}
            </time>
          </div>
          <h1>{blog.title}</h1>
          <p>{blog.description}</p>
        </div>
      </section>
      <div className="container">
        <img className="blog-post-cover" src={blog.coverImage} alt="" />
        <article className="blog-prose">
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </article>
      </div>
    </main>
  );
}
