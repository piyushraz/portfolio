import React from 'react';
import './experience.css';

const Experience = () => {
    return (
        <div className="experience-section">
            <h1>Experience</h1>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-icon">
                        <img src={`${process.env.PUBLIC_URL}/loc.png`} alt="location" />
                    </div>
                    <div className="timeline-icon2">
                        <img src={`${process.env.PUBLIC_URL}/loc.png`} alt="location" />
                    </div>
                    <div className="timeline-content">
                        <h2>Environment and Climate Change Canada</h2>
                        <h3>Software Developer Intern</h3>
                        <ul>
                            <li>Led the design and implementation of DevOps management tools using Python, Postman API, and REST APIs in Microsoft Azure, achieving a 30% boost in operational efficiency and system reliability.</li>
                            <li>Overhauled CI/CD pipelines and implemented automated backup systems, reducing deployment times by 40% and boosting resource efficiency by 25% through strategic Terraform integration in Azure.</li>
                            <li>Developed a new user interface for efficient project decommissioning and crafted custom scripts that enabled Cloud Architects and Business Analysts to track and evaluate advancements in cloud services, enhancing decision-making efficiency by 20%.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
