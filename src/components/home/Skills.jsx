import React from 'react';
import { skillGroups } from '../../data/portfolioData';

export default function Skills() {
  return <section className="skills" id="skills"><div className="container"><div className="section-header"><h2 className="section-title">Skills & Technologies</h2><p className="section-subtitle">Expertise across the development spectrum</p></div><div className="skills-groups">{skillGroups.map(([num, title, skills]) => <div className="skill-group" key={title}><div className="skill-group-header"><span className="skill-group-kicker">{num}</span><h3>{title}</h3></div><div className="skill-list">{skills.map(([src, name]) => <div className="skill-item" key={`${title}-${name}`}><img className="skill-icon-img" src={src} alt={name} /><span className="skill-name">{name}</span></div>)}</div></div>)}</div></div></section>;
}
