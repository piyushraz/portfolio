import React from 'react';
import Reveal from '../reveal/Reveal';
import './about.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-title">
        <Reveal as="h1">About Me</Reveal>
      </div>
      <Reveal className="about-content" delay={120}>
        <p>
          Hey there! I'm Piyush, a Software Developer at <strong>IBM</strong>. I graduated from the <strong>University of Toronto</strong> with an Honours Bachelor of Science in Computer Science &amp; Geospatial Data Science (HBSc with Distinction). My day-to-day is building agentic systems &mdash; multi-model GenAI assistants, RAG pipelines, A2A/MCP integrations, and LangGraph orchestration &mdash; across SaaS, on-prem, and air-gapped OpenShift deployments.
        </p>
        <div className="about-links">
          <a className="about-link" href="mailto:piyush.razdan@gmail.com">
            <span className="about-link-label">Email</span>
            <span className="about-link-value">piyush.razdan@gmail.com</span>
          </a>
          <a className="about-link" href="https://github.com/piyushraz" target="_blank" rel="noopener noreferrer">
            <span className="about-link-label">GitHub</span>
            <span className="about-link-value">github.com/piyushraz</span>
          </a>
          <a className="about-link" href="https://www.linkedin.com/in/piyushrazdan" target="_blank" rel="noopener noreferrer">
            <span className="about-link-label">LinkedIn</span>
            <span className="about-link-value">linkedin.com/in/piyushrazdan</span>
          </a>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
