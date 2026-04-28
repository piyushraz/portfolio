import React from 'react';
import Reveal from '../reveal/Reveal';
import { useTilt } from '../reveal/useTilt';
import './projects.css';

const Projects = () => {
  const tilt = useTilt(7);
  const projects = [
    {
      title: "MiniQuest Portal",
      description: "PHP mini-games platform built on an MVC architecture with PostgreSQL and page tokens for session security. Designed a normalized relational schema to cut load times and eliminate data retrieval errors.",
      tech: ["PHP", "PostgreSQL", "MVC", "HTML5", "CSS"],
      link: "https://github.com/piyushraz",
      imageUrl: "code-background.jpg"
    },
    {
      title: "Wordle Multiplayer Arena",
      description: "Real-time multiplayer Wordle in React with WebSockets for bi-directional communication and timed 60-second rounds. Back-end APIs developed with JUnit test-driven workflows and deployed to UofT's server.",
      tech: ["React", "Node", "Express", "WebSockets", "JS"],
      link: "https://github.com/piyushraz/wordle-react-web",
      imageUrl: "wordle.png"
    },
    {
      title: "Donor-Charity Platform",
      description: "Co-built a charity-donor engagement platform in Next.js and TypeScript on Vercel, with real-time chat and analytics for charity operations. Ran usability testing with 6 participants and shipped quarterly financial transparency reports.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
      link: "https://charityplatform.vercel.app/",
      imageUrl: "charity.png"
    },
    {
      title: "Three Musketeers AI",
      description: "AI-driven board game in Java and JavaFX with a greedy agent powered by recursive minimax across 3 board configurations. Applied 3+ creational design patterns and managed iterative development with agile sprints and CI.",
      tech: ["Java", "JavaFX", "JUnit", "GitHub Actions"],
      link: "https://github.com/piyushraz/Java-Three-Musketeers",
      imageUrl: "threem.jpg"
    },
    {
      title: "Echo Modifier",
      description: "Designed and implemented a program in C that modifies the pitch and speed of audio files.",
      tech: ["C", "DSP"],
      link: "https://github.com/piyushraz/c-wave-program",
      imageUrl: "wav.png"
    },
    {
      title: "Timed Math Quiz",
      description: "Timed mathematical quiz game implemented in Go. The quiz runs for a default time of 30 seconds and uses a default CSV file to extract mathematical problems.",
      tech: ["Go", "CSV"],
      link: "https://github.com/piyushraz/quiz-game-timed",
      imageUrl: "quiz.png"
    },
    {
      title: "RainMan Discord Weather Bot",
      description: "Discord bot that provides real-time weather information for any location using the OpenWeatherMap API and Discord.py.",
      tech: ["Python", "Discord.py", "OpenWeather"],
      link: "https://devpost.com/software/rainman-r6hqfs",
      imageUrl: "discord.png"
    }
  ];

  return (
    <div className="projects-section">
      <Reveal as="h1">Featured Projects</Reveal>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Reveal
            className="project-item"
            key={index}
            delay={(index % 3) * 80}
            direction="up"
            {...tilt}
          >
            <span className="project-spotlight" aria-hidden="true"></span>
            <div className="project-image-wrap">
              <img src={`${process.env.PUBLIC_URL}/${project.imageUrl}`} alt={project.title} className="project-image" />
              <div className="project-overlay">
                <button className="view-button" onClick={() => window.open(project.link, '_blank')}>
                  View Project &rarr;
                </button>
              </div>
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span className="tech-chip" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Projects;
