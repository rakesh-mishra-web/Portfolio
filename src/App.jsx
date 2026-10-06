import "./App.css";

const skills = [
  { name: "HTML", icon: "🌐", type: "Frontend" },
  { name: "CSS", icon: "🎨", type: "Frontend" },
  { name: "JavaScript", icon: "⚡", type: "Frontend" },
  { name: "React.js", icon: "⚛️", type: "Frontend" },
  { name: "Node.js", icon: "🟢", type: "Backend" },
  { name: "Express.js", icon: "🚀", type: "Backend" },
  { name: "MongoDB", icon: "🍃", type: "Database" },
  { name: "Java", icon: "☕", type: "Programming" },
  { name: "DSA", icon: "🧠", type: "Problem Solving" },
  { name: "Git & GitHub", icon: "🔧", type: "Tools" },
  { name: "Docker", icon: "🐳", type: "Tools" },
];

const projects = [
  {
    title: "Weather Recognition App",
    description:
      "A React weather application that allows users to search for a city and get real-time weather information using a weather API.",
    tech: ["React", "JavaScript", "API", "CSS"],
    github: "https://github.com/Abhishek-Kumar20050/react-weather-app",
    live: "https://react-weather-app-psi-drab.vercel.app/",
  },
  {
    title: "Quiz App",
    description:
      "An interactive quiz application with multiple-choice questions, options and answer handling.",
    tech: ["React", "JavaScript", "CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Hotel Reservation System",
    description:
      "A web application for exploring and managing hotel or accommodation listings with a user-friendly interface.",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    github: "#",
    live: "#",
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "A simple and interactive Tic-Tac-Toe game developed to practice JavaScript and game logic.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "To Do List",
    description:
      "A task management application that allows users to add, manage and organize their daily tasks.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "#",
    live: "#",
  },
];

const learning = [
  "React Components",
  "useState",
  "useContext",
  "Dynamic Routing",
  "React Hooks",
  "API Integration",
  "REST APIs",
  "Node.js & Express",
  "MongoDB & Mongoose",
  "Cloudinary",
  "Git & GitHub",
  "Docker",
  "DSA with Java",
];

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span>&lt;</span>Abhishek<span>/&gt;</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#learning">Learning</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-btn" href="#contact">
          Let's Talk
        </a>
      </nav>


      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-content">

          <p className="small-heading">
            👋 Hello, I'm
          </p>

          <h1>
            Abhishek Kumar
          </h1>

          <h2>
            Full Stack <span>Web Developer</span>
          </h2>

          <p className="hero-description">
            BCA graduate and aspiring Full Stack Developer passionate about
            building modern, responsive and user-friendly web applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work →
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="social-links">

            <a
              href="https://github.com/Abhishek-Kumar20050"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/abhishek-kumar-a108b3381"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:abhishekbca13@gmail.com">
              Email ↗
            </a>

          </div>
        </div>


        <div className="hero-card">
          <div className="code-window">

            <div className="window-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
{`const developer = {
  name: "Abhishek",
  degree: "BCA",
  role: "Full Stack Developer",

  skills: [
    "React",
    "Node.js",
    "MongoDB",
    "Java",
    "DSA"
  ],

  learning: true
};`}
            </pre>

          </div>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="section">

        <div className="section-title">
          <p>01 — ABOUT ME</p>
          <h2>Who I Am</h2>
        </div>

        <div className="about-grid">

          <div className="about-card large-card">
            <span className="card-number">01</span>

            <h3>About Me</h3>

            <p>
              I'm Abhishek Kumar, a BCA graduate and aspiring Full Stack
              Developer. I enjoy creating web applications and continuously
              improving my development and problem-solving skills.
            </p>

            <p>
              I have been working with modern web technologies including
              React, Node.js, Express and MongoDB. Along with web development,
              I am also learning Data Structures and Algorithms using Java.
            </p>

            <p>
              My goal is to become a skilled software developer who can build
              scalable, useful and clean web applications.
            </p>

          </div>


          <div className="about-card">
            <span className="about-icon">🎓</span>

            <h3>BCA Graduate</h3>

            <p>
              Computer Applications graduate with a strong interest in
              software development.
            </p>
          </div>


          <div className="about-card">
            <span className="about-icon">💻</span>

            <h3>Developer</h3>

            <p>
              Building projects with React, Node.js, Express and MongoDB.
            </p>
          </div>

        </div>
      </section>


      {/* SKILLS */}
      <section id="skills" className="section">

        <div className="section-title">
          <p>02 — SKILLS</p>
          <h2>My Tech Stack</h2>
        </div>

        <div className="skills-grid">

          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>

              <div className="skill-icon">
                {skill.icon}
              </div>

              <div>
                <h3>{skill.name}</h3>
                <p>{skill.type}</p>
              </div>

            </div>
          ))}

        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="section-title">
          <p>03 — PROJECTS</p>
          <h2>Things I've Built</h2>
        </div>


        <div className="projects-grid">

          {projects.map((project, index) => (

            <div className="project-card" key={project.title}>

              <div className="project-top">

                <span className="project-number">
                  0{index + 1}
                </span>


                <div className="project-links">

                  {project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <span className="disabled-link">
                      GitHub
                    </span>
                  )}


                  {project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live ↗
                    </a>
                  ) : (
                    <span className="disabled-link">
                      Live
                    </span>
                  )}

                </div>

              </div>


              <div className="project-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>


                <div className="tech-list">

                  {project.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>
      </section>


      {/* LEARNING */}
      <section id="learning" className="section">

        <div className="section-title">
          <p>04 — LEARNING JOURNEY</p>
          <h2>Currently Learning</h2>
        </div>


        <div className="learning-container">

          <div className="learning-intro">

            <h3>Always Learning.</h3>

            <p>
              Technology keeps changing, so I believe continuous learning is
              an important part of becoming a better developer.
            </p>

            <div className="learning-highlight">
              🧠 Currently focusing on{" "}
              <strong>DSA with Java</strong>
            </div>

          </div>


          <div className="learning-list">

            {learning.map((item, index) => (

              <div className="learning-item" key={item}>

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>
                  {item}
                </p>

                <span>✓</span>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* MY FOCUS */}
      <section className="section">

        <div className="section-title">
          <p>05 — MY FOCUS</p>
          <h2>What I Do</h2>
        </div>


        <div className="focus-grid">

          <div className="focus-card">
            <span>01</span>

            <h3>Frontend Development</h3>

            <p>
              Creating responsive and interactive interfaces using React,
              JavaScript, HTML and CSS.
            </p>
          </div>


          <div className="focus-card">
            <span>02</span>

            <h3>Backend Development</h3>

            <p>
              Building REST APIs and backend applications using Node.js and
              Express.
            </p>
          </div>


          <div className="focus-card">
            <span>03</span>

            <h3>Database</h3>

            <p>
              Working with MongoDB and Mongoose for storing and managing
              application data.
            </p>
          </div>


          <div className="focus-card">
            <span>04</span>

            <h3>Problem Solving</h3>

            <p>
              Learning Data Structures and Algorithms with Java to improve
              logical thinking and coding skills.
            </p>
          </div>

        </div>
      </section>


      {/* CERTIFICATE */}
      <section className="section">

        <div className="section-title">
          <p>06 — CERTIFICATES</p>
          <h2>My Achievements</h2>
        </div>


        <div className="certificate-card">

          <div className="certificate-icon">
            🏆
          </div>


          <div>
            <h3>Certificates & Credentials</h3>

            <p>
              Explore my certificate and learning credentials.
            </p>
          </div>


          <a
            href="https://drive.google.com/file/d/1Dw42MHZfAU4WDGgISkcWxdFBIvSv-YII/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-btn"
          >
            View Certificate →
          </a>

        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="contact-section">

        <p className="small-heading">
          07 — GET IN TOUCH
        </p>

        <h2>
          Let's build something
          <br />
          <span>awesome together.</span>
        </h2>

        <p>
          I'm always interested in discussing new projects, opportunities
          and ideas.
        </p>


        <a
          href="mailto:abhishekbca13@gmail.com"
          className="primary-btn"
        >
          Say Hello →
        </a>


        <div className="contact-info">

          {/* EMAIL */}
          <div>
            <span>Email</span>

            <a href="mailto:abhishekbca13@gmail.com">
              abhishekbca13@gmail.com
            </a>
          </div>


          {/* GITHUB */}
          <div>
            <span>GitHub</span>

            <a
              href="https://github.com/Abhishek-Kumar20050"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Abhishek-Kumar20050 ↗
            </a>
          </div>


          {/* LINKEDIN */}
          <div>
            <span>LinkedIn</span>

            <a
              href="https://www.linkedin.com/in/abhishek-kumar-a108b3381"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/abhishek-kumar-a108b3381 ↗
            </a>
          </div>

        </div>

      </section>


      {/* FOOTER */}
      <footer>

        <p>
          © 2026 Abhishek Kumar. Built with React ❤️
        </p>

        <p>
          Designed & Developed by Abhishek
        </p>

      </footer>

    </div>
  );
}

export default App;