import { useEffect, useState } from "react";
import "./App.css";

const projects = [
  {
    title: "Food Delivery Website",
    text: "A responsive food delivery website with modern UI, attractive sections and smooth navigation.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://afood.netlify.app/",
    icon: "🍔",
  },
  {
    title: "Gym Website",
    text: "A modern fitness website designed with a clean layout, responsive design and fitness-focused sections.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://agymloginpage.netlify.app/",
    icon: "🏋️",
  },
  {
    title: "A Cool Login Page",
    text: "A stylish and responsive login page with a clean interface and modern visual design.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://acoolloginpage.netlify.app/",
    icon: "🔐",
  },
  {
    title: "Real-Time AI Gym Trainer",
    text: "AI and computer vision based project for exercise detection, repetition counting and real-time form feedback.",
    tech: ["Python", "AI", "Computer Vision"],
    link: "#",
    icon: "🤖",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Git",
  "GitHub",
  "Responsive Design",
  "Java",
  "DBMS",
  "DSA",
];

function App() {
  const [menu, setMenu] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenu(false);
  };

  return (
    <div className="app">

      {/* Animated Background */}
      <div className="background">
        <div className="orb orb-one"></div>
        <div className="orb orb-two"></div>
        <div className="orb orb-three"></div>
        <div className="grid-bg"></div>
      </div>

      {/* Navbar */}
      <nav className="navbar">

        <div className="nav-container">

          <button
            className="logo"
            onClick={() => scrollTo("home")}
          >
            <span>&lt;</span>AK<span>/&gt;</span>
          </button>

          <div className={`nav-links ${menu ? "show" : ""}`}>

            <button onClick={() => scrollTo("home")}>
              Home
            </button>

            <button onClick={() => scrollTo("about")}>
              About
            </button>

            <button onClick={() => scrollTo("skills")}>
              Skills
            </button>

            <button onClick={() => scrollTo("projects")}>
              Projects
            </button>

            <button onClick={() => scrollTo("contact")}>
              Contact
            </button>

          </div>

          <button
            className="menu-btn"
            onClick={() => setMenu(!menu)}
          >
            {menu ? "✕" : "☰"}
          </button>

        </div>

      </nav>

      {/* HERO */}
      <section id="home" className="hero">

        <div className="hero-content">

          <div className="available">
            <span></span>
            Available for opportunities
          </div>

          <p className="small-text">
            HELLO, I'M
          </p>

          <h1>
            Ayush <span>Kumar</span>
          </h1>

          <h2>
            B.Tech CSE Student
            <b> × </b>
            Frontend Developer
          </h2>

          <p className="hero-description">
            I create modern, responsive and interactive websites
            while continuously improving my JavaScript, React.js
            and problem-solving skills.
          </p>

          <div className="hero-buttons">

            <button
              className="primary"
              onClick={() => scrollTo("projects")}
            >
              View Projects <span>↗</span>
            </button>

            <button
              className="secondary"
              onClick={() => scrollTo("contact")}
            >
              Contact Me <span>📧</span>
            </button>

          </div>

          {/* Social Links */}
          <div className="socials">

            <a
              href="https://github.com/ayush1728-ai"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              🐙
            </a>

            <a
              href="https://www.linkedin.com/in/ayush-kumar-a332a2364"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              💼
            </a>

            <a
              href="https://leetcode.com/u/xLGpt985vN"
              target="_blank"
              rel="noreferrer"
              title="LeetCode"
            >
              🧠
            </a>

            <a
              href="mailto:ak4109761@gmail.com"
              title="Email"
            >
              📧
            </a>

          </div>

        </div>

        {/* Developer Card */}
        <div className="developer-card">

          <div className="card-glow"></div>

          <div className="code-header">

            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>ayush.jsx</p>

          </div>

          <div className="code-body">

            <p>
              <small>01</small>
              <em>const</em>{" "}
              <strong>developer</strong> = {"{"}
            </p>

            <p>
              <small>02</small>
              name: <b>"Ayush Kumar"</b>,
            </p>

            <p>
              <small>03</small>
              role: <b>"Frontend Developer"</b>,
            </p>

            <p>
              <small>04</small>
              degree: <b>"B.Tech CSE"</b>,
            </p>

            <p>
              <small>05</small>
              skills: [
            </p>

            <p>
              <small>06</small>
              &nbsp;&nbsp;"HTML", "CSS",
            </p>

            <p>
              <small>07</small>
              &nbsp;&nbsp;"JavaScript", "React"
            </p>

            <p>
              <small>08</small>
              ],
            </p>

            <p>
              <small>09</small>
              learning: <b>true</b>
            </p>

            <p>
              <small>10</small>
              {"};"}
            </p>

            <p className="typing-line">
              <small>11</small>▌
            </p>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="section">

        <div className="section-title">

          <p>01 — ABOUT ME</p>

          <h2>
            Turning ideas into
            <span> digital experiences.</span>
          </h2>

        </div>

        <div className="about-grid">

          <div className="about-box">

            <div className="big-icon">
              🎓
            </div>

            <h3>
              B.Tech Computer Science
            </h3>

            <p>
              Currently pursuing B.Tech in Computer Science
              & Engineering.
            </p>

            <div className="location">
              📍 India
            </div>

          </div>

          <div className="about-text">

            <p>
              I'm a 4th-year B.Tech CSE student passionate about
              frontend development and modern web technologies.
            </p>

            <p>
              I enjoy creating websites from scratch and learning
              through real-world projects. Currently, I'm improving
              my skills in React.js, JavaScript and Data Structures
              & Algorithms.
            </p>

            <div className="stats">

              <div>
                <strong>4th</strong>
                <span>Year B.Tech</span>
              </div>

              <div>
                <strong>4+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>Learning</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SKILLS */}
      <section id="skills" className="section dark">

        <div className="section-title">

          <p>02 — SKILLS</p>

          <h2>
            Technologies I
            <span> work with.</span>
          </h2>

        </div>

        <div className="skills">

          {skills.map((skill, index) => (

            <div
              className="skill"
              key={skill}
              style={{
                animationDelay: `${index * 80}ms`,
              }}
            >

              <span className="skill-icon">
                {index % 3 === 0
                  ? "💻"
                  : index % 3 === 1
                  ? "⚡"
                  : "🚀"}
              </span>

              <span>
                {skill}
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="section-title">

          <p>03 — PROJECTS</p>

          <h2>
            Things I've
            <span> built.</span>
          </h2>

        </div>

        <div className="projects">

          {projects.map((project, index) => (

            <article
              className="project"
              key={project.title}
            >

              <div className="project-header">

                <span>
                  0{index + 1}
                </span>

                <div className="project-icon">
                  {project.icon}
                </div>

              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.text}
              </p>

              <div className="tags">

                {project.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

              {project.link === "#" ? (

                <span className="project-link disabled">
                  🚧 In Development
                </span>

              ) : (

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                  <span>↗</span>
                </a>

              )}

            </article>

          ))}

        </div>

      </section>

      {/* EDUCATION */}
      <section className="education">

        <div className="education-box">

          <div>

            <p>
              EDUCATION
            </p>

            <h2>
              Bachelor of Technology
            </h2>

            <span>
              Computer Science & Engineering · 4th Year
            </span>

          </div>

          <div className="education-icon">
            🎓
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact">

        <div className="contact-grid">

          <div>

            <p className="contact-label">
              04 — CONTACT
            </p>

            <h2>
              Let's build something
              <span> great.</span>
            </h2>

            <p className="contact-description">
              Have a project idea, internship opportunity or
              simply want to connect? Feel free to reach out.
            </p>

            <div className="contact-links">

              <a href="mailto:ak4109761@gmail.com">
                📧
                <span>
                  ak4109761@gmail.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/ayush-kumar-a332a2364"
                target="_blank"
                rel="noreferrer"
              >
                💼
                <span>
                  LinkedIn
                </span>
              </a>

              <a
                href="https://github.com/ayush1728-ai"
                target="_blank"
                rel="noreferrer"
              >
                🐙
                <span>
                  GitHub
                </span>
              </a>

              <a
                href="https://leetcode.com/u/xLGpt985vN"
                target="_blank"
                rel="noreferrer"
              >
                🧠
                <span>
                  LeetCode
                </span>
              </a>

            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={(e) => e.preventDefault()}
          >

            <label>
              Name
              <input
                type="text"
                placeholder="Your name"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                placeholder="your@email.com"
              />
            </label>

            <label>
              Message
              <textarea
                rows="5"
                placeholder="Write your message..."
              ></textarea>
            </label>

            <button className="primary">
              Send Message 🚀
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div>
          <strong>
            &lt;AK /&gt;
          </strong>

          <p>
            Built with React & ❤️
          </p>
        </div>

        <div className="footer-socials">

          <a
            href="https://github.com/ayush1728-ai"
            target="_blank"
            rel="noreferrer"
          >
            🐙
          </a>

          <a
            href="https://www.linkedin.com/in/ayush-kumar-a332a2364"
            target="_blank"
            rel="noreferrer"
          >
            💼
          </a>

          <a
            href="https://leetcode.com/u/xLGpt985vN"
            target="_blank"
            rel="noreferrer"
          >
            🧠
          </a>

        </div>

      </footer>

      {/* Back To Top */}
      {showTop && (

        <button
          className="top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ↑
        </button>

      )}

    </div>
  );
}

export default App;