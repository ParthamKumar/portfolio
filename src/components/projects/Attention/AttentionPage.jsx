import React, { Suspense, lazy } from 'react';

import { AnimatedArrow, GlassCard, SectionIntro, TechBadge, WorkflowNode } from '../../common/ProjectPrimitives';



const Spline = lazy(() => import('@splinetool/react-spline'));



export default function AttentionPage() {
  const techBadges = ['Python', 'PyTorch', 'NLP', 'Transformers', 'Attention Mechanism', 'BPE Tokenization'];
  const architectureFlow = [
    ['Raw Text', 'Human language input'],
    ['Text Processing', 'Cleaning, normalization, formatting'],
    ['BPE Tokenizer', 'Subword segmentation'],
    ['Vocabulary', 'Token index mapping'],
    ['Token IDs', 'Numerical sequence'],
    ['Embedding Layer', 'Dense vector representation'],
    ['Positional Encoding', 'Sequence order signal'],
    ['Transformer Encoder', 'Contextual source representation'],
    ['Transformer Decoder', 'Autoregressive generation'],
    ['Linear + Softmax', 'Probability distribution'],
    ['Generated Text', 'Decoded model output'],
  ];
  const nlpPipeline = ['Raw Dataset', 'Cleaning', 'Normalization', 'BPE Training', 'Vocabulary Creation', 'Token Encoding', 'Batch Preparation'];
  const components = [
    'Custom BPE Tokenizer', 'Vocabulary System', 'Embedding Layer', 'Positional Encoding',
    'Scaled Dot Product Attention', 'Multi Head Attention', 'Encoder', 'Decoder',
    'Masking System', 'Training Pipeline', 'Text Generation', 'Attention Visualization',
  ];
  const resources = [
    {
      title: 'Attention Is All You Need',
      type: 'Research Paper PDF',
      href: '/Projects/Attention Is All You Need/Book and Paper/Attention Is All You Need.pdf',
    },
    {
      title: 'Build a Large Language Model From Scratch',
      type: 'Reference Book PDF',
      href: '/Projects/Attention Is All You Need/Book and Paper/Build a Large Language Model (From Scratch) -- Sebastian Raschka -- ( WeLib.org ).epub.pdf',
    },
  ];
  const skills = ['Research Engineering', 'Deep Learning', 'NLP', 'PyTorch', 'Transformer Architecture', 'LLM Foundations'];

  return (
    <main className="project-detail-page attention-page">
      <nav className="project-detail-nav">
        <a href="/" className="project-detail-brand">Attention<span>.</span></a>
        <a href="/" className="project-detail-cta">Back Home</a>
      </nav>

      <section className="project-detail-hero attention-detail-hero attention-research-hero">
        <div className="attention-grid-bg" aria-hidden="true" />
        <div className="attention-orbit" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, index) => <span key={index} style={{ '--i': index }} />)}
        </div>
        <div className="project-detail-copy">
          <span className="project-detail-pill">Deep Learning Research Implementation</span>
          <h1>Transformer NLP Model Implementation From Scratch</h1>
          <p>
            Rebuilding the Transformer architecture from the ground up based on
            "Attention Is All You Need" by Vaswani et al.
          </p>
          <div className="tech-badge-row">{techBadges.map((badge) => <TechBadge key={badge}>{badge}</TechBadge>)}</div>
          <div className="project-detail-actions">
            <a href="#overview" className="btn-primary">Explore Architecture</a>
            <a href="#implementation" className="btn-secondary">View Components</a>
          </div>
        </div>
        <div className="attention-hero-preview">
          <Suspense fallback={<div className="spline-loading">Loading 3D preview...</div>}>
            <Spline scene="https://prod.spline.design/vW1SBAQuLiI97Aq1/scene.splinecode" />
          </Suspense>
        </div>
      </section>

      <section className="project-detail-section attention-section" id="overview">
        <div className="attention-two-column">
          <GlassCard className="attention-copy-card">
            <span className="section-kicker">Project Overview</span>
            <h2>Recreating the Foundation of Modern NLP</h2>
            <p>
              This project is a complete end-to-end implementation of the Transformer architecture
              from scratch. I rebuilt the full NLP workflow, from raw text processing and custom BPE
              tokenization to embeddings, positional encoding, attention, encoder-decoder blocks,
              training, and sequence generation.
            </p>
            <p>
              The goal was to understand the internals behind modern LLMs beyond API usage: how text
              becomes tokens, how attention learns relationships, how masking protects autoregressive
              generation, and how the model converts learned probabilities back into language.
            </p>
          </GlassCard>
          <ArchitectureFlow nodes={architectureFlow} />
        </div>
      </section>

      <section className="project-detail-section attention-section">
        <SectionIntro title="Complete NLP Pipeline" subtitle="Raw language transformed into model-ready tensors" />
        <div className="horizontal-pipeline">
          {nlpPipeline.map((stage, index) => <PipelineStep key={stage} label={stage} index={index} />)}
        </div>
      </section>

      <section className="project-detail-section attention-section">
        <div className="attention-two-column compact">
          <BpeVisualization />
          <AttentionVisualization />
        </div>
      </section>

      <section className="project-detail-section attention-section">
        <SectionIntro title="Multi-Head Attention" subtitle="Parallel attention heads learning different token relationships" />
        <MultiHeadDiagram />
      </section>

      <section className="project-detail-section attention-section">
        <SectionIntro title="Transformer Architecture" subtitle="A modernized view of the original encoder-decoder design" />
        <TransformerDiagram />
      </section>

      <section className="project-detail-section attention-section" id="implementation">
        <SectionIntro title="Implemented Components" subtitle="Every major internal system rebuilt from the ground up" />
        <div className="component-grid">
          {components.map((name, index) => <GlassCard className="component-card" key={name}><span>{String(index + 1).padStart(2, '0')}</span><h3>{name}</h3></GlassCard>)}
        </div>
      </section>

      <section className="project-detail-section attention-section">
        <div className="attention-two-column compact">
          <CodeTree />
          <TrainingFlow />
        </div>
      </section>

      <section className="project-detail-section attention-section">
        <SectionIntro title="Project Resources" subtitle="Preview the source material, download references, or inspect the implementation repository" />
        <div className="resource-grid">
          {resources.map((resource) => <ResourceCard key={resource.title} resource={resource} />)}
          <GlassCard className="resource-card github-resource-card">
            <span className="section-kicker">Source Code</span>
            <h3>Build_LLM_From_Scratch</h3>
            <p>Explore the implementation repository, code structure, and Transformer model work on GitHub.</p>
            <div className="resource-actions">
              <a href="https://github.com/ParthamKumar/Build_LLM_From_Scratch" target="_blank" rel="noreferrer" className="btn-primary">Open GitHub</a>
            </div>
          </GlassCard>
        </div>
      </section>

      <section className="project-detail-section attention-section">
        <div className="attention-dashboard">
          <span className="section-kicker">Project Outcome</span>
          <h2>Built a Transformer-based NLP system from raw text to generated output.</h2>
          <div className="results-grid">
            {['Transformer Built From Scratch', 'Custom NLP Pipeline', 'Custom BPE Tokenizer', 'Attention Visualization', 'Text Generation'].map((result) => (
              <GlassCard className="result-card" key={result}><span>✓</span>{result}</GlassCard>
            ))}
          </div>
          <div className="skill-cloud">{skills.map((skill) => <TechBadge key={skill}>{skill}</TechBadge>)}</div>
        </div>
      </section>
    </main>
  );
}

function ArchitectureFlow({ nodes }) {
  return (
    <GlassCard className="architecture-flow-card">
      <span className="section-kicker">Raw Text to Output</span>
      <div className="architecture-flow">
        {nodes.map(([title, text], index) => (
          <React.Fragment key={title}>
            <WorkflowNode title={title} text={text} index={index} />
            {index < nodes.length - 1 && <AnimatedArrow />}
          </React.Fragment>
        ))}
      </div>
    </GlassCard>
  );
}

function PipelineStep({ label, index }) {
  return <GlassCard className="pipeline-step" style={{ '--delay': `${index * 0.16}s` }}><span>{String(index + 1).padStart(2, '0')}</span><h3>{label}</h3></GlassCard>;
}

function BpeVisualization() {
  return (
    <GlassCard className="bpe-card">
      <span className="section-kicker">BPE Tokenizer</span>
      <h2>Subword Encoding</h2>
      <div className="bpe-word">unbelievable</div>
      <div className="bpe-token-row"><span>un</span><span>believe</span><span>able</span></div>
      <div className="bpe-id-row"><span>1204</span><span>532</span><span>98</span></div>
    </GlassCard>
  );
}

function ResourceCard({ resource }) {
  return (
    <GlassCard className="resource-card">
      <span className="section-kicker">{resource.type}</span>
      <h3>{resource.title}</h3>
      <p>Open an in-browser preview or download the file for offline reading.</p>
      <div className="resource-actions">
        <a href={resource.href} target="_blank" rel="noreferrer" className="btn-primary">Preview</a>
        <a href={resource.href} download className="btn-secondary">Download</a>
      </div>
    </GlassCard>
  );
}

function AttentionVisualization() {
  const tokens = ['The', 'cat', 'sat', 'on', 'mat'];
  return (
    <GlassCard className="attention-viz-card">
      <span className="section-kicker">Scaled Dot-Product Attention</span>
      <h2>Attention Heatmap</h2>
      <div className="qkv-row"><span>Query</span><span>Key</span><span>Value</span></div>
      <div className="attention-matrix">
        {tokens.map((row, rowIndex) => tokens.map((col, colIndex) => (
          <span key={`${row}-${col}`} title={`${row} attends to ${col}`} style={{ '--heat': ((rowIndex + colIndex) % 5) + 1 }} />
        )))}
      </div>
      <div className="token-row">{tokens.map((token) => <span key={token}>{token}</span>)}</div>
    </GlassCard>
  );
}

function MultiHeadDiagram() {
  return (
    <GlassCard className="multi-head-card">
      <div className="embedding-bar">Input Embedding</div>
      <AnimatedArrow />
      <div className="attention-heads">
        {Array.from({ length: 8 }).map((_, index) => <div className="attention-head" key={index}><span>Head {index + 1}</span><small>Q → K → V</small></div>)}
      </div>
      <AnimatedArrow />
      <div className="embedding-bar">Concatenate → Output Projection</div>
    </GlassCard>
  );
}

function TransformerDiagram() {
  const encoder = ['Input Embedding', 'Multi Head Self Attention', 'Add & Norm', 'Feed Forward', 'Add & Norm', 'Encoder Output'];
  const decoder = ['Output Embedding', 'Masked Attention', 'Cross Attention', 'Feed Forward', 'Linear', 'Softmax', 'Output'];
  return (
    <div className="transformer-diagram">
      <ArchitectureStack title="Encoder" items={encoder} />
      <div className="cross-bridge"><span>Context Vectors</span></div>
      <ArchitectureStack title="Decoder" items={decoder} />
    </div>
  );
}

function ArchitectureStack({ title, items }) {
  return <GlassCard className="architecture-stack"><h3>{title}</h3>{items.map((item, index) => <React.Fragment key={item}><div className="stack-node">{item}</div>{index < items.length - 1 && <AnimatedArrow />}</React.Fragment>)}</GlassCard>;
}

function CodeTree() {
  return (
    <GlassCard className="code-tree-card">
      <span className="section-kicker">Code Architecture</span>
      <pre>{`transformer-from-scratch/
├── tokenizer/
│   └── bpe_tokenizer.py
├── models/
│   ├── attention.py
│   ├── encoder.py
│   └── decoder.py
├── training/
│   └── train.py
└── inference/
    └── generate.py`}</pre>
    </GlassCard>
  );
}

function TrainingFlow() {
  const steps = ['Dataset', 'Tokenizer', 'Forward Pass', 'Loss Calculation', 'Backpropagation', 'Optimizer Update', 'Checkpoint'];
  return <GlassCard className="training-flow-card"><span className="section-kicker">Training Pipeline</span>{steps.map((step, index) => <React.Fragment key={step}><WorkflowNode title={step} text="Training stage" index={index} />{index < steps.length - 1 && <AnimatedArrow />}</React.Fragment>)}</GlassCard>;
}

