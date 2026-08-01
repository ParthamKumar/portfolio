import React from 'react';
import { experiences } from '../../data/portfolioData';

export default function Experience() {
  return <section className="about" id="experience"><div className="container"><div className="section-header"><h2 className="section-title">Experience</h2><p className="section-subtitle">Hands-on work across full-stack engineering, AI systems, and research</p></div><div className="experience-grid">{experiences.map((item) => <div className="experience-card" key={item.title}><div className="card-header"><h3 className="card-title">{item.title}</h3><span className="card-company">{item.company}</span><span className="card-date">{item.date}</span></div><div className="card-content"><p>{item.description}</p></div><div className="card-tags">{item.tags.map((tag) => <span className="category-tag" key={tag}>{tag}</span>)}</div></div>)}</div></div></section>;
}
