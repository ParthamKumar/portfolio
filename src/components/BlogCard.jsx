import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ blog }) {
  return (
    <article className="blog-card">
      <Link to={`/blog/${blog.slug}`} className="blog-card-image" aria-label={`Read ${blog.title}`}>
        <img src={blog.coverImage} alt="" loading="lazy" />
      </Link>
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span>{blog.category}</span>
          <time dateTime={blog.date}>
            {new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(blog.date))}
          </time>
        </div>
        <h2><Link to={`/blog/${blog.slug}`}>{blog.title}</Link></h2>
        <p>{blog.description}</p>
        <Link className="blog-card-link" to={`/blog/${blog.slug}`}>Read article</Link>
      </div>
    </article>
  );
}
