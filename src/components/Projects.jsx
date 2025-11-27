// src/components/Projects.jsx
import { useState } from "react";

const projects = [
  {
    id: "01",
    title: "Multimodal Emotion Recognition",
    role: "Deep Learning • Computer Vision • NLP",
    description:
      "Built a multimodal emotion recognition system that fuses text, audio, and visual features to classify human emotions using deep learning pipelines.",
    tech: ["Python", "TensorFlow / Keras", "OpenCV", "Librosa"],
  },
  {
    id: "02",
    title: "Online Bidding System",
    role: "Full Stack Web Application",
    description:
      "Developed an end-to-end online bidding platform with user authentication, product listings, bidding logic, and admin controls.",
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
  },
  {
    id: "03",
    title: "Movie Search App",
    role: "Frontend React App",
    description:
      "Created a responsive movie explorer that allows users to search movies, view details, and explore trending titles using a public movie API.",
    tech: ["React", "JavaScript (ES6+)", "REST API"],
  },
  
];

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="projects-page">
      <div className="projects-inner">
        {/* Left text */}
        <div className="projects-left">
          <p className="projects-eyebrow">PROJECTS</p>
          <h1 className="projects-heading">
            my <br />
            <span>work</span>
          </h1>
          <p className="projects-subtitle">
            A selection of applications and research that combine React, Java,
            Spring Boot, deep learning, and fairness-aware machine learning.
          </p>
        </div>

        {/* Right buttons */}
        <div className="projects-right">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className="project-pill"
              onMouseEnter={() => setActiveProject(project)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <span className="project-pill-index">
                {String(index + 1).padStart(2, "0")}.
              </span>
              <span className="project-pill-title">{project.title}</span>
            </button>
          ))}
        </div>

        {/* Glassy popup */}
        {activeProject && (
          <div
            className="project-popup"
            onMouseEnter={() => setActiveProject(activeProject)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <p className="popup-label">{activeProject.id}</p>
            <h3 className="popup-title">{activeProject.title}</h3>
            <p className="popup-role">{activeProject.role}</p>
            <p className="popup-desc">{activeProject.description}</p>
            <div className="popup-tags">
              {activeProject.tech.map((t) => (
                <span key={t} className="popup-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
