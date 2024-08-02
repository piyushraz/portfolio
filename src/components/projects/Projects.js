import React from 'react';
import './projects.css';

const Projects = () => {
  const projects = [
    {
        title: "UofT Purpose Platform",
        description: "Led a development team in prototyping a gratitude-focused platform for local charities. Figma for UI/UX design and collaboration",
        link: "https://charityplatform.vercel.app/", 
        imageUrl: "charity.png"

    },
    {
        title: "Wordle Arena",
        description: "Built a fully-functional multiplayer arena using React for the front-end and Web Sockets for real-time bi-directional communication, enhancing user engagement.",
        link: "https://github.com/piyushraz/wordle-react-web", 
        imageUrl: "wordle.png"
    },
    {
      title: "Three Musketeers AI-Augmented",
      description: "Developed an AI-driven board game, Three Musketeers, using Java and JavaFX, featuring a greedy AI agent implemented with the minimax algorithm, emphasizing object-oriented programming principles.",
      link: "https://github.com/piyushraz/Java-Three-Musketeers", // Placeholder link, replace with actual project URL
      imageUrl: "threem.jpg" // Placeholder image
    },
    {
      title: "Echo Modifier",
      description: "Designed and implemented a program that modifies the pitch and speed of audio files in C.",
      link: "https://github.com/piyushraz/c-wave-program", // Placeholder link, replace with actual project URL
      imageUrl: "wav.png" // Placeholder image
    },
    {
      title: "RainMan Discord Weather Bot",
      description: "Created a Discord bot that provides real-time weather information for any location using the OpenWeatherMap API and Discord.py.",
      link: "https://devpost.com/software/rainman-r6hqfs", // Placeholder link, replace with actual project URL
      imageUrl: "discord.png" // Placeholder image
    }
  ];

  return (
    <div className="projects-section">
      <h1>Featured Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="view-button" onClick={() => window.open(project.link, '_blank')}>View Project</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
