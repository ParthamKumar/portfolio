import React, { Suspense, lazy, useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import '../style.css';
import './react.css';

const Spline = lazy(() => import('@splinetool/react-spline'));

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
];

const projects = [
  {
    category: 'applications',
    title: 'ArguMint',
    image: '/Projects/ArguMint/ArguMint Image.png',
    description: 'An AI-powered research project that transforms argumentative claims into meaningful visual representations using advanced AI pipelines.',
    features: ['Research-driven AI project', 'LoRA-based parameter-efficient fine-tuning', 'Semantic understanding with embeddings', 'Transformer & Generative AI workflows', 'Real-time AI image generation pipeline'],
    link: 'https://argumint-blog.vercel.app/',
  },
  {
    category: 'applications',
    title: 'ShopBuddy',
    image: '/Projects/ShopBuddy/ShopBuddy Thumbnail2.png',
    description: 'An AI-powered shopping assistant that provides transparent product recommendations by comparing marketplaces, analyzing reviews, and explaining decisions through a multi-agent AI workflow.',
    features: ['Multi-Agent AI Architecture', 'Intelligent Product Comparison', 'Price Normalization Across Platforms', 'AI-Powered Review Analysis', 'Transparent Recommendation Reasoning'],
    link: '/shopbuddy',
  },
  {
    category: 'applications',
    title: 'Spreadlink',
    image: '/images/spreadlink.png',
    description: 'The Next-Generation Social Media Platform for Entertainment and Creative Expression. Built to empower creators.',
    features: ['Enterprise level project', '200+ Downloads', '4.9 Star Rating', '150+ Countries', '0% Ads'],
    link: '/spreadlink.html',
  },
  {
    category: 'applications',
    title: 'Ominos',
    image: '/images/ominos.png',
    description: 'An Advanced AI Assistant designed for professionals, creators, and developers. Built for complex problem-solving.',
    features: ['Advanced AI Reasoning', 'Live Voice Interaction', 'Neural Art Engine', 'Dark Cinematic UI', '0% Ads'],
    link: '/ominos.html',
  },
  {
    category: 'websites',
    title: 'Websites',
    image: '/images/musicplayer.png',
    description: 'Collection of website projects focused on conversion and UX.',
    features: ['5+ Projects', 'Conversion-focused UX', 'Performance first', 'Responsive by design'],
    link: '/web.html',
  },
  {
    category: 'games',
    title: 'Games',
    image: '/images/carimg2.jpg',
    description: 'A curated selection of captivating mobile games offering diverse gameplay styles.',
    features: ['3 Projects', 'Engaging and immersive gameplay', 'Intuitive mobile controls', 'Polished graphics'],
    link: '/games.html',
  },
  {
    category: 'models3d',
    title: '3D Models',
    image: '/images/car3.jpg',
    description: 'Professional 3D models and visualizations for various applications.',
    features: ['5 Projects', 'High-quality models', 'Accurate geometry', 'Professional lighting'],
    link: '/3dmodels.html',
  },
  {
    category: 'graphics',
    title: 'UI/UX Design',
    image: '/images/graphic.png',
    description: 'Explore my collection of intuitive and aesthetically pleasing UI/UX designs.',
    features: ['User research', 'Wireframing & Prototyping', 'Interactive design'],
    link: '/graphics.html',
  },
];

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Freelance / Independent Developer',
    date: '2023 - Present',
    description: 'Designed and developed scalable web applications using React, Node.js, Express.js, SQL, and NoSQL databases. Built complete digital platforms including MCQ learning systems and eCommerce solutions with secure authentication, role-based access, dashboards, API integrations, and optimized user experiences. Experienced in designing database architectures, developing RESTful APIs, and managing the complete development lifecycle from planning and architecture to deployment and performance optimization.',
    tags: ['Full Stack Development', 'React', 'Node.js', 'Express.js', 'SQL', 'MongoDB', 'SaaS Applications'],
  },
  {
    title: 'AI Engineer',
    company: 'Independent AI Projects',
    date: '2024 - Present',
    description: 'Developing practical AI solutions by integrating modern Artificial Intelligence, Data Science, and Generative AI technologies into real-world applications. Building intelligent systems focused on automation, data analysis, AI-powered workflows, and machine learning applications to improve efficiency and decision-making.',
    tags: ['Artificial Intelligence', 'Data Science', 'Generative AI', 'Machine Learning', 'Automation', 'AI Applications'],
  },
  {
    title: 'AI Researcher',
    company: 'Independent Research & Development',
    date: '2024 - Present',
    description: 'Studying and exploring advancements in Artificial Intelligence and Deep Learning through research papers, experimentation, and practical implementation. Analyzed influential papers including "Attention Is All You Need" and implemented key concepts of the Transformer architecture to understand modern NLP models.',
    tags: ['Deep Learning', 'NLP', 'Transformers', 'LLMs', 'AI Research'],
  },
];

const skillGroups = [
  ['01', 'Programming Languages', [['/images/js.png', 'JavaScript'], ['/images/python.png', 'Python'], ['/Logos/Java.png', 'Java'], ['/Logos/C.png', 'C'], ['/Logos/C++ (CPlusPlus).png', 'C++'], ['/images/mysql-database.png', 'SQL']]],
  ['02', 'Frontend Techs', [['/Logos/HTML5.png', 'HTML5'], ['/images/physics.png', 'React'], ['/images/js.png', 'JavaScript'], ['/images/text.png', 'CSS'], ['/Logos/Tailwind CSS.png', 'Tailwind CSS'], ['/Logos/React Bootstrap.png', 'React Bootstrap'], ['/Logos/Vite.js.png', 'Vite.js'], ['/images/designer (1).png', 'UI/UX']]],
  ['03', 'Backend Techs', [['/images/node-js.png', 'Node.js'], ['/images/node-js.png', 'Express.js'], ['/images/coding (1).png', 'REST APIs'], ['/Logos/Java.png', 'Java Backend']]],
  ['04', 'Databases', [['/images/mysql-database.png', 'SQL'], ['/Logos/MongoDB.png', 'MongoDB']]],
  ['05', 'AI & Data', [['/images/python.png', 'Python'], ['/Logos/classification.png', 'Machine Learning'], ['/Logos/communication-skills.png', 'Generative AI'], ['/Logos/data-analysis.png', 'Data Science'], ['/Logos/nlp.png', 'NLP'], ['/Logos/TensorFlow.png', 'TensorFlow'], ['/Logos/PyTorch.png', 'PyTorch'], ['/Logos/Keras.png', 'Keras'], ['/Logos/scikit-learn.png', 'Scikit-learn'], ['/Logos/langchain-color.png', 'LangChain'], ['/Logos/langgraph-color (1).png', 'LangGraph']]],
  ['06', 'Tools & Workflow', [['/images/git.png', 'Git'], ['/Logos/Docker.png', 'Docker']]],
];

function App() {
  if (window.location.pathname === '/shopbuddy') {
    return <ShopBuddyPage />;
  }

  const [activeCategory, setActiveCategory] = useState('all');
  const [typedRole, setTypedRole] = useState('AI Engineer');
  const [activeSpotlight, setActiveSpotlight] = useState(0);
  const categories = [['all', 'All'], ['applications', 'Applications'], ['websites', 'Websites'], ['games', 'Games'], ['models3d', '3D Models'], ['graphics', 'Graphics']];
  const visibleProjects = useMemo(() => projects.filter((project) => activeCategory === 'all' || project.category === activeCategory), [activeCategory]);
  const spotlight = projects[activeSpotlight % projects.length];

  useEffect(() => {
    const roles = ['AI Engineer', 'Full Stack Developer'];
    let roleIndex = 0;
    let charIndex = roles[0].length;
    let deleting = true;
    let timeoutId;
    const tick = () => {
      const role = roles[roleIndex];
      charIndex += deleting ? -1 : 1;
      setTypedRole(role.slice(0, charIndex));
      let delay = deleting ? 50 : 100;
      if (!deleting && charIndex === role.length) {
        delay = 3000;
        deleting = true;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 500;
      }
      timeoutId = window.setTimeout(tick, delay);
    };
    timeoutId = window.setTimeout(tick, 3000);
    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => setActiveSpotlight((value) => (value + 1) % projects.length), 4000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <>
      <Navbar />
      <Hero typedRole={typedRole} />
      <About />
      <Projects categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} projects={visibleProjects} />
      <Spotlight project={spotlight} />
      <Experience />
      <Skills />
      <Contact />
      <footer className="footer"><div className="container"><p>&copy; 2025 Partham Kumar. All rights reserved.</p></div></footer>
    </>
  );
}

function Navbar() {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo"><span className="logo-text">Portfolio</span></div>
        <ul className="nav-menu">{navItems.map(([label, href]) => <li className="nav-item" key={href}><a href={href} className="nav-link">{label}</a></li>)}</ul>
        <div className="nav-cta"><a href="/Resume.pdf" download="Partham_Kumar_Resume.pdf" className="btn-resume">Resume</a></div>
      </div>
    </nav>
  );
}

function Hero({ typedRole }) {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tagline">{typedRole}</span>
          <h1 className="hero-title">Hello, I'm<br />Partham Kumar</h1>
          <div className="profile-section"><p className="bio-text">AI Engineer and Full-Stack Developer passionate about building intelligent solutions that solve real-world problems.</p></div>
          <div className="hero-buttons">
            <a className="btn-primary" href="#projects">View My Work</a>
            <a className="btn-secondary" href="#contact">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual"><Spline scene="https://prod.spline.design/ABrQHVpts78MTmiH/scene.splinecode" /></div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-intro" id="about">
      <div className="container">
        <div className="section-header about-header"><h2 className="section-title">About</h2><p className="section-subtitle">Building Practical AI Solutions</p></div>
        <div className="about-intro-content">
          <a className="about-image-link" href="https://khi.nu.edu.pk/" target="_blank" rel="noreferrer"><img src="/New/Uni Image.png" alt="FAST-NUCES Karachi Campus" className="about-uni-image" /></a>
          <div className="about-copy"><p className="about-intro-text">I'm <strong>Partham Kumar</strong>, an <strong>AI Engineer</strong> and <strong>Full-Stack Developer</strong> with a Bachelor's degree in <strong>Artificial Intelligence</strong> from <a href="https://www.google.com/maps/dir//FAST+National+University+Karachi+Campus%D8%8C+St-4,+Sector+17-D%D8%8C+St-4+N-5,+Sector+17-D+Karachi,+Pakistan%E2%80%AD/@25.3451671,68.3935487,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3eb3316c5276e35b:0x823a6a0100195ffd!2m2!1d67.2646838!2d24.8568991?entry=ttu" target="_blank" rel="noreferrer">FAST-NUCES</a>. I'm passionate about <strong>turning ideas into practical solutions</strong>, solving <strong>meaningful problems</strong>, and creating technology that makes a <strong>real-world impact</strong>.</p></div>
        </div>
      </div>
    </section>
  );
}

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

function ShopBuddyPage() {
  const agents = [
    ['Input Safety Gate Agent', 'Blocks harmful requests, detects non-shopping queries, and helps prevent prompt injection before processing begins.'],
    ['Query Interpreter Agent', 'Understands user intent, extracts product requirements, identifies budgets, and converts natural language into structured search parameters.'],
    ['Human Approval Checkpoint', 'Shows extracted requirements so users can confirm or modify the criteria before marketplace collection starts.'],
    ['Marketplace Collector Agent', 'Collects product details, specifications, pricing, and marketplace data from platforms such as Amazon and Daraz.'],
    ['Quality Gate Agent', 'Filters products using price range, relevance, ratings, review count, duplicates, and missing information.'],
    ['Value Ranker Agent', 'Ranks products by price-to-performance, features, reviews, customer trust signals, and user preferences.'],
    ['Review Analyst Agent', 'Turns raw customer feedback into concise insight about satisfaction, complaints, reliability, and trust indicators.'],
    ['Explainability Narrator Agent', 'Generates recommendation summaries, comparison reports, and human-readable reasons behind every ranking.'],
  ];

  return (
    <main className="project-detail-page shopbuddy-page">
      <nav className="project-detail-nav">
        <a href="/" className="project-detail-brand">ShopBuddy<span>.</span></a>
        <a href="/" className="project-detail-cta">Back Home</a>
      </nav>

      <section className="project-detail-hero">
        <div className="project-detail-copy">
          <span className="project-detail-pill">AI shopping assistant</span>
          <h1>Shop Smarter With Transparent AI.</h1>
          <p>
            ShopBuddy compares marketplaces, analyzes reviews, normalizes prices, and explains product
            recommendations through a multi-agent AI workflow.
          </p>
          <div className="project-detail-actions">
            <a href="https://xai-shopping-agent.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary">Visit Website</a>
            <a href="/" className="btn-secondary">Portfolio</a>
          </div>
        </div>
        <div className="project-detail-spline">
          <Suspense fallback={<div className="spline-loading">Loading 3D preview...</div>}>
            <Spline scene="/Projects/ShopBuddy/scene.splinecode" />
          </Suspense>
        </div>
      </section>

      <section className="project-detail-section" id="overview">
        <div className="project-detail-container">
          <div className="detail-copy-block">
            <span className="section-kicker">Project Overview</span>
            <h2 className="section-title">Explainable AI for Confident Shopping Decisions</h2>
            <p>
              ShopBuddy is an AI-powered multi-agent shopping assistant designed to make online
              product comparison more transparent, intelligent, and user-friendly. Traditional
              e-commerce platforms often recommend products through hidden ranking algorithms, leaving
              users unsure why one product was selected or another was rejected.
            </p>
            <p>
              ShopBuddy solves this by combining specialized AI agents that analyze products, evaluate
              quality, understand customer feedback, compare prices across marketplaces, and generate
              clear explanations behind every recommendation.
            </p>
          </div>
          <img className="detail-showcase-image" src="/Projects/ShopBuddy/des1.png" alt="ShopBuddy product recommendation interface" />
        </div>
      </section>

      <section className="project-detail-section">
        <div className="project-detail-container reverse">
          <img className="detail-showcase-image" src="/Projects/ShopBuddy/des2.png" alt="ShopBuddy product comparison screen" />
          <div className="detail-copy-block">
            <span className="section-kicker">Problem Statement</span>
            <h2 className="section-title">Moving Beyond Black-Box Recommendations</h2>
            <p>
              Online shopping decisions become confusing when users cannot see why a product ranked
              higher, whether reviews are trustworthy, or if an alternative was filtered out because
              of price, quality, budget, or relevance.
            </p>
            <p>
              ShopBuddy introduces an explainable AI approach so users can understand the complete
              decision-making process behind product recommendations.
            </p>
          </div>
        </div>
      </section>

      <section className="project-detail-section">
        <div className="project-detail-container">
          <div className="detail-copy-block">
            <span className="section-kicker">Agent Architecture</span>
            <h2 className="section-title">A Team of AI Agents With Clear Responsibilities</h2>
            <p>
              Instead of relying on one general model, ShopBuddy uses a collaborative multi-agent
              architecture where each agent owns a specific part of the shopping workflow. This
              improves accuracy, reliability, transparency, and scalability.
            </p>
          </div>
          <img className="detail-showcase-image" src="/Projects/ShopBuddy/des3.png" alt="ShopBuddy multi-agent architecture visual" />
        </div>
        <div className="agent-grid">
          {agents.map(([title, text], index) => (
            <div className="agent-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
              {index < agents.length - 1 && <span className="agent-arrow" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </section>

      <section className="project-detail-section" id="workflow">
        <div className="section-header">
          <h2 className="section-title">System Workflow</h2>
          <p className="section-subtitle">From user query to explainable recommendation report</p>
        </div>
        <div className="workflow-scroll" aria-label="ShopBuddy AI agent workflow">
          <div className="workflow-diagram">
            {[
              ['01', 'User Query', 'Natural language shopping request'],
              ['02', 'AI Supervisor', 'Intent, budget, and product criteria'],
              ['03', 'Human Confirmation', 'User reviews extracted requirements'],
              ['04', 'Marketplace Collection', 'Products gathered and normalized'],
              ['05', 'Quality Filter', 'Low quality or irrelevant items removed'],
              ['06', 'Value Ranking', 'Best options ranked by trust and value'],
              ['07', 'Review Analysis', 'Customer feedback summarized by AI'],
              ['08', 'Explainable Report', 'Clear recommendation reasoning'],
            ].map(([number, title, text], index, items) => (
              <div className="workflow-step" key={title}>
                <div className="workflow-node">
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                {index < items.length - 1 && <div className="workflow-arrow" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project-detail-section" id="contact">
        <div className="detail-impact-card">
          <span className="section-kicker">Project Impact</span>
          <h2>ShopBuddy turns online shopping from a black-box recommendation experience into an understandable AI-guided decision system.</h2>
          <p>
            The project demonstrates how multi-agent AI can improve trust in recommendations, shopping
            efficiency, decision accuracy, and user confidence.
          </p>
          <a href="https://xai-shopping-agent.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary">Open Live Website</a>
        </div>
      </section>
    </main>
  );
}

function Spotlight({ project }) {
  return (
    <section className="spotlight" id="spotlight">
      <div className="container"><div className="spotlight-wrapper"><div className="spotlight-visual"><img id="spotlight-img" src={project.image || '/Projects/ShopBuddy/ShopBuddy Thumbnail2.png'} alt={`${project.title} preview`} /></div><div className="spotlight-info"><span className="spotlight-tag">Featured Work</span><h2 className="reveal-text">{project.title}</h2><p className="reveal-text">{project.description}</p><div className="spotlight-meta"><span>{project.category}</span></div><a href={project.link} className="btn-outline">View Details</a><div className="progress-bar"><div className="progress-fill" /></div></div></div></div>
    </section>
  );
}

function Experience() {
  return <section className="about" id="experience"><div className="container"><div className="section-header"><h2 className="section-title">Experience</h2><p className="section-subtitle">Hands-on work across full-stack engineering, AI systems, and research</p></div><div className="experience-grid">{experiences.map((item) => <div className="experience-card" key={item.title}><div className="card-header"><h3 className="card-title">{item.title}</h3><span className="card-company">{item.company}</span><span className="card-date">{item.date}</span></div><div className="card-content"><p>{item.description}</p></div><div className="card-tags">{item.tags.map((tag) => <span className="category-tag" key={tag}>{tag}</span>)}</div></div>)}</div></div></section>;
}

function Skills() {
  return <section className="skills" id="skills"><div className="container"><div className="section-header"><h2 className="section-title">Skills & Technologies</h2><p className="section-subtitle">Expertise across the development spectrum</p></div><div className="skills-groups">{skillGroups.map(([num, title, skills]) => <div className="skill-group" key={title}><div className="skill-group-header"><span className="skill-group-kicker">{num}</span><h3>{title}</h3></div><div className="skill-list">{skills.map(([src, name]) => <div className="skill-item" key={`${title}-${name}`}><img className="skill-icon-img" src={src} alt={name} /><span className="skill-name">{name}</span></div>)}</div></div>)}</div></div></section>;
}

function Contact() {
  const contacts = [
    ['https://mail.google.com/mail/?view=cm&fs=1&to=parthamchawla1@gmail.com', '/Logos/gmail.png', 'Gmail', 'parthamchawla1@gmail.com'],
    ['https://www.linkedin.com/in/partham-kumar-a8494021a/', '/Logos/linkedin.png', 'LinkedIn', 'partham-kumar-a8494021a'],
    ['https://github.com/ParthamKumar', '/Logos/github.png', 'GitHub', 'github.com/ParthamKumar'],
    ['https://wa.me/923363428830', '/Logos/whatsapp.png', 'WhatsApp', '+92 336 3428830'],
  ];
  return <section className="contact" id="contact"><div className="container"><div className="section-header"><h2 className="section-title">Let's Connect</h2><p className="section-subtitle">Ready to bring your ideas to life</p></div><div className="contact-links"><div className="contact-cards">{contacts.map(([href, icon, label, value]) => <a href={href} target="_blank" rel="noreferrer" className="contact-card" key={label}><span className="contact-logo"><img src={icon} alt={label} /></span><span className="contact-label">{label}</span><span className="contact-value">{value}</span></a>)}<a href="https://www.instagram.com/parthamchawla1/?hl=en" target="_blank" rel="noreferrer" className="contact-card"><span className="contact-logo"><img src="/Logos/icons8-instagram-48.png" alt="Instagram" /></span><span className="contact-label">Instagram</span><span className="contact-value">@parthamchawla1</span></a></div></div></div></section>;
}

createRoot(document.getElementById('root')).render(<App />);
