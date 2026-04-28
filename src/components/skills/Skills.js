import React from 'react';
import Reveal from '../reveal/Reveal';
import './skills.css';

const Skills = () => {
  const skillGroups = [
    {
      category: 'Programming Languages',
      items: ['Bash', 'C', 'Go', 'Java', 'JavaScript', 'TypeScript', 'PHP', 'Python', 'SQL']
    },
    {
      category: 'Generative AI',
      items: ['A2A', 'LangChain', 'LangGraph', 'LiteLLM', 'LLMs', 'MCP',  'Context Forge', 'Vertex AI', 'watsonx.ai']
    },
    {
      category: 'AI Coding Assistants',
      items: ['Antigravity', 'Claude Code', 'Codex', 'IBM Bob', 'Warp']
    },
    {
      category: 'Databases',
      items: ['ChromaDB', 'MongoDB', 'PostgreSQL']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Azure', 'Docker', 'GCP', 'Kubernetes', 'Linux', 'OpenShift', 'Podman', 'Terraform']
    }
  ];

  return (
    <div className="skills-section" id="skills-section">
      <Reveal as="h1">Skills</Reveal>
      <div className="skills-groups">
        {skillGroups.map((group, gi) => (
          <Reveal className="skills-group" key={gi} delay={gi * 80}>
            <h2 className="skills-group-title">{group.category}</h2>
            <div className="skills-container">
              {group.items.map((skill, i) => (
                <span
                  key={i}
                  className="skill-item"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Skills;
