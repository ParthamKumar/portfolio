import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useParams } from 'react-router-dom';
import BlogLayout from '../components/BlogLayout';
import { getBlogBySlug } from '../blogs';

export default function BlogPost() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  const { Component } = blog;

  return (
    <>
      <Helmet>
        <title>{blog.title} | Partham Kumar</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.coverImage} />
      </Helmet>
      <BlogLayout blog={blog}>
        <Component />
      </BlogLayout>
    </>
  );
}
