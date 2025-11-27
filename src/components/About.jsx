// src/components/About.jsx

const education = [
  {
    years: "2018–2019",
    institution: "Bharatiya Vidya Bhavan’s",
    degree: "CBSE – School",
    location: "Vijayawada, India",
  },
  {
    years: "2019–2021",
    institution: "Narayana Junior College",
    degree: "Intermediate – MPC",
    location: "Vijayawada, India",
  },
  {
    years: "2021–2025",
    institution: "KL University",
    degree: "B.Tech – Computer Science & Engineering",
    location: "Vaddeswaram, India",
  },
];

const skills = [
  "C",
  "Java",
  "Python",
  "React",
  "Spring Boot",
  "Django",
  "MySQL",
  "AWS",
  "Machine Learning",
  "Deep Learning",
  "Git & GitHub",
  "Automation / RPA",
];

function About() {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        {/* Header */}
        <div className="about-header">
          <p className="about-eyebrow">ABOUT</p>
          <h1 className="about-title">A little about my journey</h1>
          <p className="about-subtitle">
            Full Stack Developer with a strong foundation in computer science,
            a passion for clean UI, and experience across web development,
            cloud, and machine learning.
          </p>
        </div>

        {/* Top: Education + Skills */}
        <div className="about-columns">
          {/* Education */}
          <div className="about-education">
            <h2 className="about-section-title">Education</h2>

            <div className="timeline">
              {education.map((item, index) => (
                <div className="timeline-item" key={item.institution}>
                  <div className="timeline-line" />
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <p className="timeline-years">{item.years}</p>
                    <h3 className="timeline-institution">
                      {item.institution}
                    </h3>
                    <p className="timeline-degree">{item.degree}</p>
                    <p className="timeline-location">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="about-skills">
            <h2 className="about-section-title">Skills</h2>
            <p className="skills-subtitle">Technologies I work with</p>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="about-publications">
          <h2 className="about-section-title">Publications</h2>

          <div className="publication-card">
            <p className="pub-year">2024</p>
            <h3 className="pub-title">Fairness in Predicting Recidivism Score</h3>
            <p className="pub-details">
              The paper (and related research) studies how machine-learning models that predict the risk of recidivism (i.e. likelihood of reoffending) can be made both accurate and fair — ensuring they don't discriminate across different demographic groups (race, gender, etc.).
            </p>
            <a
              href="https://link.springer.com/chapter/10.1007/978-981-97-3191-6_18"
              target="_blank"
              rel="noreferrer"
              className="pub-link"
            >
              View publication →
            </a>
            <p className="pub-note">
             
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
