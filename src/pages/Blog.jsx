import React from 'react';
import { Helmet } from 'react-helmet-async';
import BlogCard from '../components/BlogCard';
import { blogs } from '../blogs';

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog | Partham Kumar</title>
        <meta name="description" content="Articles on AI agents, RAG systems, machine learning, and practical software engineering." />
      </Helmet>
      <main className="blog-page">
        <section className="blog-list-hero">
          <div className="container">
            <span className="section-kicker">Blog</span>
            <h1>Engineering notes on AI systems</h1>
            <p>Practical writing on building agentic workflows, retrieval systems, and machine learning products that hold up outside the demo.</p>
          </div>
        </section>
        <section className="blog-list-section">
          <div className="container">
            <div className="blog-grid">
              {blogs.map((blog) => <BlogCard key={blog.slug} blog={blog} />)}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
