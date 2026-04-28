import React, { useEffect, useRef, useState } from 'react';
import { useTilt } from '../reveal/useTilt';
import './experience.css';

const experiences = [
    {
        company: 'International Business Machines Corporation',
        short: 'IBM',
        role: 'Software Developer',
        location: 'Markham, ON',
        dates: 'Nov 2024 - Present',
        active: true,
        bullets: [
            "Shipped Concert's GenAI assistant with multi-model support, featuring tool activation via function-calling, persistent conversation state, suggested/follow-up question flows, and reasoning transparency.",
            "Designed and built an end-to-end document Q&A pipeline ingesting user-uploaded enterprise documents to serve RAG-powered queries over proprietary data for compliance and vulnerability workflows.",
            "Drove adoption of A2A and MCP across IBM products, wrapping services as A2A agents and deploying MCP servers to expose tools to agentic systems.",
            "Built a hybrid natural-language-to-SQL feature combining vector matching against a curated query catalog with schema-aware LLM fallback to reduce hallucinations on complex schemas.",
            "Benchmarked and integrated alternative LLM providers (Vertex AI, watsonx), evaluating latency, throughput, and response quality via LLM-as-judge for production model selection.",
            "Designing a cross-product AI orchestration layer using A2A agents and LangGraph, supporting multi-agent workflows with planning, execution, and feedback loops across enterprise tasks.",
            "Adapted features for SaaS, on-prem, and air-gapped OpenShift under customer compliance constraints."
        ]
    },
    {
        company: 'Environment and Climate Change Canada',
        short: 'ECCC',
        role: 'Software Developer Intern',
        location: 'North York, ON',
        dates: 'May 2022 - Aug 2023',
        active: false,
        bullets: [
            "Automated Azure DevOps project provisioning with Python and REST APIs, handling user creation, identifier extraction from PDFs, and JSON response parsing.",
            "Overhauled Azure CI/CD pipelines to back up project repositories to Azure Blob Storage via YAML workflows."
        ]
    }
];

const TimelineItem = ({ exp, index }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    const tilt = useTilt(5);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        if (typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return;
        }
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setVisible(true);
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
        );
        obs.observe(node);
        return () => obs.disconnect();
    }, []);

    const side = index % 2 === 0 ? 'left' : 'right';

    return (
        <li
            ref={ref}
            className={`tl-item tl-${side} ${visible ? 'is-visible' : ''}`}
        >
            <div className="tl-dot" aria-hidden="true">
                <span className="tl-dot-inner">{exp.short}</span>
                {exp.active && <span className="tl-pulse"></span>}
            </div>

            <div className="tl-card" {...tilt}>
                <span className="tl-spotlight" aria-hidden="true"></span>
                <div className="tl-card-header">
                    <span className="tl-dates">{exp.dates}</span>
                    {exp.active && <span className="tl-badge">Current</span>}
                </div>
                <h2 className="tl-company">{exp.company}</h2>
                <h3 className="tl-role">{exp.role}</h3>
                <p className="tl-location">{exp.location}</p>
                <ul className="tl-bullets">
                    {exp.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                    ))}
                </ul>
            </div>
        </li>
    );
};

const Experience = () => {
    return (
        <div className="experience-section">
            <h1 className="experience-title">Experience</h1>
            <ol className="tl">
                <span className="tl-rail" aria-hidden="true"></span>
                {experiences.map((exp, i) => (
                    <TimelineItem exp={exp} index={i} key={exp.company} />
                ))}
                <span className="tl-rail-cap" aria-hidden="true"></span>
            </ol>
        </div>
    );
};

export default Experience;
