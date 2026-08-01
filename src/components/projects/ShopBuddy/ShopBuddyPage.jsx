import React from 'react';
import ResponsiveSpline from '../../common/ResponsiveSpline';

export default function ShopBuddyPage() {
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
        <ResponsiveSpline
          className="project-detail-spline"
          scene="/Projects/ShopBuddy/scene.splinecode"
          fallbackImage="/Projects/ShopBuddy/ShopBuddy Thumbnail2.png"
          alt="ShopBuddy project preview"
        />
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
