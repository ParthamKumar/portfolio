const blogModules = import.meta.glob('./*.mdx', { eager: true });

export const blogs = Object.entries(blogModules)
  .map(([path, module]) => {
    const slug = path.replace('./', '').replace('.mdx', '');

    return {
      slug,
      Component: module.default,
      ...module.frontmatter,
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug);
}
