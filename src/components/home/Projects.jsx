import React from 'react';

function Projects({ categories, activeCategory, onCategoryChange, projects }) {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header"><h2 className="section-title">Projects</h2><p className="section-subtitle">Showcasing innovation and creativity</p></div>
        <div className="project-categories">{categories.map(([id, label]) => <button key={id} className={`category-btn ${activeCategory === id ? 'active' : ''}`} onClick={() => onCategoryChange(id)}>{label}</button>)}</div>
        <div className="projects-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="project-card" data-category={project.category}>
      <div className="project-image">
        <img className="project-icon" src={project.image} alt={`${project.title} thumbnail`} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-features"><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
        <a href={project.link} target={project.link.startsWith('http') ? '_blank' : undefined} rel={project.link.startsWith('http') ? 'noreferrer' : undefined} className="btn-outline">View Project</a>
      </div>
    </div>
  );
}

export default Projects;
