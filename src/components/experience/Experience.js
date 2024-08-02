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
                            <li>Software Developer at the Cloud Centre of Excellence, Business Solutions and Corporate Finance Branch.</li>
                            <li>Trained in Cloud Computing via Pluralsight and Cloud Guru.</li>
                            <li>Developed and tested DevOps project management scripts in Microsoft Azure using Python, Postman, and REST.</li>
                            <li>Deployed Terraform in Azure environment to regulate and emulate rapid creation of resources and services.</li>
                            <li>Managed CI/CD pipelines in Azure using YAML and constant weekly repository backup via storage accounts.</li>
                            <li>Engineered analytic DevOps scripts for Business Analysts and Senior Advisors and Cloud Architects to review.</li>
                            <li>Implemented a UI for handling decommission of projects through REST API.</li>
                            <li>Mentored incoming developers and transferred knowledge of automation techniques and workflow.</li>
                            <li>Attended AWS landing zone conferences to further knowledge in Cloud Computing.</li>
                        </ul>
                    </div>
                    <br></br>
                    <div className="timeline-content">
                        <h2>University of Toronto Mississauga</h2>
                        <h3>Geospatial Research Analyst</h3>
                        <ul>
                            <li>Soil Respiration & SRTM Project at Mississauga's Riverwood Conservancy.</li>
                            <li>UTM team, focusing on field methods, physical geography, and analysis.</li>
                            <li>Analyzed CO2 levels and elevation using EGM-5 CO2 Gas Analyzer and Decagon GS-3 Probe.</li>
                            <li>Geo-processed sample data with the carbon analyzer and conducted regression analysis in Python</li>
                            <li>Created heat maps in ArcGIS Pro to reveal correlations between temperature, moisture, and soil respiration.</li>
                            <li>Generated comparative line graphs illustrating the relationship between soil respiration and temperature across different elevations.</li>

                        </ul>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
