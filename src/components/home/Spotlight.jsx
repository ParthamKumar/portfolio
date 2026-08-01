import React from 'react';

export default function Spotlight({ project }) {
  return (
    <section className="spotlight" id="spotlight">
      <div className="container"><div className="spotlight-wrapper"><div className="spotlight-visual"><img id="spotlight-img" src={project.image || '/Projects/ShopBuddy/ShopBuddy Thumbnail2.png'} alt={`${project.title} preview`} /></div><div className="spotlight-info"><span className="spotlight-tag">Featured Work</span><h2 className="reveal-text">{project.title}</h2><p className="reveal-text">{project.description}</p><div className="spotlight-meta"><span>{project.category}</span></div><a href={project.link} className="btn-outline">View Details</a><div className="progress-bar"><div className="progress-fill" /></div></div></div></div>
    </section>
  );
}
