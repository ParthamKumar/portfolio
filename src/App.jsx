import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Projects from './components/home/Projects';
import Spotlight from './components/home/Spotlight';
import Experience from './components/home/Experience';
import Skills from './components/home/Skills';
import Contact from './components/home/Contact';
import AttentionPage from './components/projects/Attention/AttentionPage';
import BudgetBeePage from './components/projects/BudgetBee/BudgetBeePage';
import ShopBuddyPage from './components/projects/ShopBuddy/ShopBuddyPage';
import { projects } from './data/portfolioData';

export default function App() {
  if (window.location.pathname === '/attention-is-all-you-need') {
    return <AttentionPage />;
  }

  if (window.location.pathname === '/budgetbee') {
    return <BudgetBeePage />;
  }

  if (window.location.pathname === '/shopbuddy') {
    return <ShopBuddyPage />;
  }

  const [activeCategory, setActiveCategory] = useState('all');
  const [typedRole, setTypedRole] = useState('AI Engineer');
  const [activeSpotlight, setActiveSpotlight] = useState(0);
  const categories = [['all', 'All'], ['applications', 'Applications']];
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
      <footer className="footer"><div className="container"><p>&copy; 2026 Partham Kumar. All rights reserved.</p></div></footer>
    </>
  );
}
