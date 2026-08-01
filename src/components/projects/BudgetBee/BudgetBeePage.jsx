import React from 'react';

import { AnimatedArrow, GlassCard, SectionIntro, TechBadge, WorkflowNode } from '../../common/ProjectPrimitives';



export default function BudgetBeePage() {
  const screenshots = [
    ['/Projects/BudgetBee/i1.jpg', 'Dashboard overview', 'Dashboard Screens'],
    ['/Projects/BudgetBee/i2.PNG', 'Income expense summary', 'Dashboard Screens'],
    ['/Projects/BudgetBee/i3.PNG', 'Recent transactions', 'Transaction Management'],
    ['/Projects/BudgetBee/i4.PNG', 'Add transaction workflow', 'Transaction Management'],
    ['/Projects/BudgetBee/i5.PNG', 'Category selection', 'Transaction Management'],
    ['/Projects/BudgetBee/i6.PNG', 'Financial graph analytics', 'Statistics Screens'],
    ['/Projects/BudgetBee/i7.PNG', 'Monthly financial report', 'Statistics Screens'],
    ['/Projects/BudgetBee/i8.PNG', 'Account management', 'Account Screens'],
  ];
  const features = [
    ['Transaction Management', 'Users can easily add income and expenses with detailed information including category, account, date, and notes.', ['Income', 'Expense', 'Categories', 'Accounts', 'Notes']],
    ['Financial Dashboard', 'Provides a quick overview of financial health through income, expenses, balance, and transaction summaries.', ['Balance Overview', 'Recent Activity', 'Summary Cards']],
    ['Statistics & Analytics', 'Visualizes financial activities through graphs and daily or monthly analysis.', ['Graphs', 'Reports', 'Spending Trends']],
    ['Account Management', 'Allows users to track multiple accounts including cash, bank, Sadapay, Easypaisa, and custom accounts.', ['Cash', 'Bank', 'Wallets']],
    ['Offline Data Management', 'Uses Realm Database for fast local storage and offline financial tracking.', ['Realm', 'Local Storage', 'Offline First']],
  ];
  const workflow = [
    ['User', 'Starts from everyday finance activity'],
    ['Dashboard', 'Views balance and recent summaries'],
    ['Transaction Management', 'Adds, edits, and organizes records'],
    ['Business Logic', 'Validates and calculates financial state'],
    ['Realm Database', 'Stores offline app data locally'],
    ['Financial Analytics', 'Aggregates spending and income trends'],
    ['Visual Reports', 'Displays graphs and useful insights'],
  ];
  const transactionFlow = [
    ['User Input', 'Income or expense details'],
    ['Transaction Form', 'Category, account, date, notes'],
    ['Validation', 'Checks required financial fields'],
    ['Realm Database', 'Persists local record'],
    ['Summary Update', 'Refreshes dashboard totals'],
    ['Statistics Graph', 'Updates financial visualizations'],
  ];
  const timeline = ['Requirement Analysis', 'UI Design', 'Android Development', 'Database Integration', 'Testing', 'Client Ready Application'];
  const skills = ['Android Development', 'Java Programming', 'Mobile UI Development', 'Database Design', 'Realm Integration', 'CRUD Operations', 'Offline Applications', 'Data Visualization'];

  return (
    <main className="project-detail-page budgetbee-page">
      <nav className="project-detail-nav">
        <a href="/" className="project-detail-brand">BudgetBee<span>.</span></a>
        <a href="/" className="project-detail-cta">Back Home</a>
      </nav>

      <section className="project-detail-hero budgetbee-hero">
        <div className="budgetbee-bg-grid" aria-hidden="true" />
        <div className="project-detail-copy">
          <span className="project-detail-pill">Android Application</span>
          <h1>BudgetBee<br />Smart Personal Finance Management Application</h1>
          <p>
            A Java-based Android finance application designed to track income, expenses, accounts,
            and financial insights with offline-first storage.
          </p>
          <div className="tech-badge-row">{['Android Application', 'Java', 'Android Studio', 'Realm Database', 'Finance Management', 'Offline First'].map((item) => <TechBadge key={item}>{item}</TechBadge>)}</div>
          <div className="project-detail-actions">
            <a href="#gallery" className="btn-primary">View Screens</a>
            <a href="https://github.com/ParthamKumar/BudgetBee" target="_blank" rel="noreferrer" className="btn-secondary">View GitHub</a>
            <a href="/" className="btn-secondary">Portfolio</a>
          </div>
        </div>
        <div className="budgetbee-phone-stage">
          <PhoneMockup src="/Projects/BudgetBee/i1.jpg" alt="BudgetBee dashboard screen" className="phone-main" />
          <PhoneMockup src="/Projects/BudgetBee/i6.PNG" alt="BudgetBee analytics screen" className="phone-float phone-float-left" />
          <PhoneMockup src="/Projects/BudgetBee/i4.PNG" alt="BudgetBee transaction screen" className="phone-float phone-float-right" />
        </div>
      </section>

      <section className="project-detail-section budgetbee-section">
        <div className="attention-two-column compact">
          <GlassCard className="budgetbee-placeholder-card">
            <span className="section-kicker">Project Overview</span>
            <h2>A simple but powerful finance assistant for daily life.</h2>
            <p>
              BudgetBee is a complete personal finance management Android application designed to
              help users record transactions, monitor spending patterns, analyze financial trends,
              manage multiple accounts, and improve financial decision-making.
            </p>
            <p>
              Unlike basic expense trackers, BudgetBee combines organized transaction management,
              graphical financial analysis, account-based tracking, and offline-first data storage
              through Realm Database.
            </p>
            <div className="resource-actions budgetbee-repo-action">
              <a href="https://github.com/ParthamKumar/BudgetBee" target="_blank" rel="noreferrer" className="btn-primary">Open Project Repository</a>
            </div>
          </GlassCard>
          <GlassCard className="budgetbee-metrics-card">
            <span className="section-kicker">Product Scope</span>
            <div className="budgetbee-metrics">
              {['Income Tracking', 'Expense Tracking', 'Monthly Reports', 'Graph Analytics', 'Multi Account', 'Offline Storage'].map((metric) => <span key={metric}>{metric}</span>)}
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="project-detail-section budgetbee-section" id="gallery">
        <SectionIntro title="Application Screenshots" subtitle="Explore the complete user experience of BudgetBee, from recording transactions to analyzing financial performance." />
        <ScreenshotGallery screenshots={screenshots} />
      </section>

      <section className="project-detail-section budgetbee-section">
        <SectionIntro title="Feature Overview" subtitle="Core mobile finance workflows built for clarity, speed, and offline reliability." />
        <div className="budgetbee-feature-grid">
          {features.map(([title, description, tags], index) => <FeatureCard key={title} title={title} description={description} tags={tags} index={index} />)}
        </div>
      </section>

      <section className="project-detail-section budgetbee-section">
        <SectionIntro title="Application Workflow" subtitle="How user actions move through app screens, logic, local storage, and visual reports." />
        <BudgetWorkflow nodes={workflow} />
      </section>

      <section className="project-detail-section budgetbee-section">
        <div className="attention-two-column compact">
          <BudgetWorkflow title="Transaction Flow" nodes={transactionFlow} />
          <DatabaseDiagram />
        </div>
      </section>

      <section className="project-detail-section budgetbee-section">
        <SectionIntro title="Technology Stack" subtitle="A focused Android stack for native mobile development and fast local persistence." />
        <div className="budgetbee-tech-grid">
          {['Java', 'Android Studio', 'Realm Database', 'Mobile Development', 'UI/UX Design', 'Local Storage'].map((tech) => <GlassCard className="budgetbee-tech-card" key={tech}><span>{tech.slice(0, 2).toUpperCase()}</span><h3>{tech}</h3></GlassCard>)}
        </div>
      </section>

      <section className="project-detail-section budgetbee-section">
        <div className="attention-two-column compact">
          <Timeline items={timeline} />
          <ProjectArchitecture />
        </div>
      </section>

      <section className="project-detail-section budgetbee-section">
        <div className="attention-dashboard budgetbee-outcome">
          <span className="section-kicker">Project Outcome</span>
          <h2>Successfully developed a complete personal finance management application.</h2>
          <p>
            BudgetBee enables users to track, analyze, and manage their financial activities through
            an intuitive mobile experience. The project demonstrates Android development from
            scratch, real-world financial workflows, local database implementation, and data-driven
            mobile interfaces.
          </p>
          <div className="skill-cloud">{skills.map((skill) => <TechBadge key={skill}>{skill}</TechBadge>)}</div>
        </div>
      </section>
    </main>
  );
}

function PhoneMockup({ src, alt, className = '' }) {
  return <div className={`phone-mockup-frame ${className}`}><span className="phone-speaker" /><img src={src} alt={alt} /></div>;
}

function ScreenshotGallery({ screenshots }) {
  const grouped = screenshots.reduce((acc, item) => {
    const category = item[2];
    acc[category] = acc[category] || [];
    acc[category].push(item);
    return acc;
  }, {});
  return (
    <div className="budgetbee-gallery">
      {Object.entries(grouped).map(([category, items]) => (
        <div className="gallery-category" key={category}>
          <h3>{category}</h3>
          <div className="gallery-phone-grid">
            {items.map(([src, alt], index) => <PhoneMockup key={src} src={src} alt={alt} className={index % 2 ? 'gallery-phone tall' : 'gallery-phone'} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

function FeatureCard({ title, description, tags, index }) {
  return (
    <GlassCard className="budgetbee-feature-card" style={{ '--delay': `${index * 0.12}s` }}>
      <span className="feature-icon">{String(index + 1).padStart(2, '0')}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>{tags.map((tag) => <TechBadge key={tag}>{tag}</TechBadge>)}</div>
    </GlassCard>
  );
}

function BudgetWorkflow({ title = 'Workflow Diagram', nodes }) {
  return (
    <GlassCard className="budgetbee-workflow-card">
      <span className="section-kicker">{title}</span>
      <div className="budgetbee-workflow">
        {nodes.map(([label, description], index) => (
          <React.Fragment key={label}>
            <WorkflowNode title={label} text={description} index={index} />
            {index < nodes.length - 1 && <AnimatedArrow />}
          </React.Fragment>
        ))}
      </div>
    </GlassCard>
  );
}

function DatabaseDiagram() {
  return (
    <GlassCard className="database-diagram-card">
      <span className="section-kicker">Database Architecture</span>
      <div className="database-root">BudgetBee</div>
      <div className="database-branches">
        <div><h3>Transactions</h3><p>Stores income and expense records</p></div>
        <div><h3>Accounts</h3><p>Maintains cash, bank, and wallet information</p></div>
        <div><h3>Categories</h3><p>Organizes financial activities</p></div>
      </div>
      <div className="database-root realm">Realm Database</div>
    </GlassCard>
  );
}

function Timeline({ items }) {
  return (
    <GlassCard className="budgetbee-timeline-card">
      <span className="section-kicker">Development Process</span>
      <div className="budgetbee-timeline">{items.map((item, index) => <div key={item} style={{ '--delay': `${index * 0.12}s` }}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item}</h3></div>)}</div>
    </GlassCard>
  );
}

function ProjectArchitecture() {
  return (
    <GlassCard className="budgetbee-architecture-card">
      <span className="section-kicker">Project Architecture</span>
      {['Presentation Layer', 'Application Logic', 'Data Management Layer', 'Realm Database'].map((item, index, arr) => (
        <React.Fragment key={item}>
          <div className="stack-node">{item}</div>
          {index < arr.length - 1 && <AnimatedArrow />}
        </React.Fragment>
      ))}
    </GlassCard>
  );
}

