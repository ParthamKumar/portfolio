import React from 'react';

export function TechBadge({ children }) {
  return <span className="tech-badge">{children}</span>;
}

export function GlassCard({ className = '', style, children }) {
  return <div className={`glass-card ${className}`} style={style}>{children}</div>;
}

export function SectionIntro({ title, subtitle }) {
  return <div className="section-header attention-section-header"><h2 className="section-title">{title}</h2><p className="section-subtitle">{subtitle}</p></div>;
}

export function WorkflowNode({ title, text, index }) {
  return <div className="workflow-glass-node" style={{ '--delay': `${index * 0.08}s` }}><span className="node-icon">{index + 1}</span><h3>{title}</h3><p>{text}</p></div>;
}

export function AnimatedArrow() {
  return <div className="animated-arrow" aria-hidden="true"><span /></div>;
}
