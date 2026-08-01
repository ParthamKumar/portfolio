import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems, resumeOptions } from '../../data/portfolioData';

export default function Navbar() {
  const { pathname } = useLocation();
  const sectionHref = (href) => (pathname === '/' ? href : `/${href}`);

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <Link className="nav-logo" to="/"><span className="logo-text">Portfolio</span></Link>
        <ul className="nav-menu">
          {navItems.map(([label, href]) => <li className="nav-item" key={href}><a href={sectionHref(href)} className="nav-link">{label}</a></li>)}
          {/* <li className="nav-item"><Link to="/blog" className={`nav-link ${pathname.startsWith('/blog') ? 'active' : ''}`}>Blog</Link></li> */}
        </ul>
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
