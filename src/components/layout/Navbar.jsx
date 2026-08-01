import React from 'react';
import { navItems, resumeOptions } from '../../data/portfolioData';

export default function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo"><span className="logo-text">Portfolio</span></div>
        <ul className="nav-menu">{navItems.map(([label, href]) => <li className="nav-item" key={href}><a href={href} className="nav-link">{label}</a></li>)}</ul>
        <div className="nav-cta resume-menu">
          <button className="btn-resume" type="button" aria-haspopup="true" aria-expanded="false">Resume</button>
          <div className="resume-dropdown" aria-label="Resume options">
            {resumeOptions.map(([label, href, fileName]) => (
              <div className="resume-option" key={href}>
                <span>{label}</span>
                <div className="resume-actions">
                  <a href={href} target="_blank" rel="noreferrer">Preview</a>
                  <a href={href} download={fileName}>Download</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
