import React, { useEffect, useRef, useState } from 'react';
import './title.css';

const ROLES = [
    'Software Developer',
    'Software Engineer',
    'Backend Developer',
    'GenAI Engineer',
    'RAG Builder',
    'Agentic Systems Developer',
    'MCP Practitioner',
    'A2A Architect',
    'AI Orchestrator'
];

const TYPE_SPEED = 70;
const DELETE_SPEED = 35;
const HOLD_AFTER_TYPE = 1400;
const HOLD_AFTER_DELETE = 250;

const Title = () => {
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [phase, setPhase] = useState('typing');
    const timeoutRef = useRef(null);

    useEffect(() => {
        const role = ROLES[roleIndex];

        if (phase === 'typing') {
            if (text.length < role.length) {
                timeoutRef.current = setTimeout(
                    () => setText(role.slice(0, text.length + 1)),
                    TYPE_SPEED
                );
            } else {
                timeoutRef.current = setTimeout(() => setPhase('hold-typed'), HOLD_AFTER_TYPE);
            }
        } else if (phase === 'hold-typed') {
            setPhase('deleting');
        } else if (phase === 'deleting') {
            if (text.length > 0) {
                timeoutRef.current = setTimeout(
                    () => setText(role.slice(0, text.length - 1)),
                    DELETE_SPEED
                );
            } else {
                timeoutRef.current = setTimeout(() => {
                    setRoleIndex((roleIndex + 1) % ROLES.length);
                    setPhase('typing');
                }, HOLD_AFTER_DELETE);
            }
        }

        return () => clearTimeout(timeoutRef.current);
    }, [text, phase, roleIndex]);

    const resumeUrl = `${process.env.PUBLIC_URL}/resume.pdf`;

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Piyush-Razdan-Resume.pdf';
        link.click();
    };

    return (
        <div className="title-container">
            <p className="title-eyebrow">Hello, my name is</p>
            <h1 className="title-name">
                <span className="title-name-gradient">PIYUSH RAZDAN</span>
            </h1>
            <p className="title-role" aria-live="polite">
                <span className="role-text">{text}</span>
                <span className="role-caret" aria-hidden="true"></span>
            </p>
            <div className="buttons">
                <button className="btn btn-primary" onClick={() => window.open(resumeUrl, '_blank')}>
                    View Resume
                </button>
                <button className="btn btn-ghost" onClick={handleDownload}>
                    Download Resume
                </button>
            </div>
        </div>
    );
};

export default Title;
