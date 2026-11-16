
import { useState } from "react";
import Scene3D from "./components/Scene3D";
import "./App.css";

const skills = [
  {
    title: "Programming",
    items: ["Java", "Python", "C++", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Microsoft Azure",
      "Docker",
      "Docker Compose",
      "Ansible",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    title: "Networking & Linux",
    items: [
      "Linux",
      "Ubuntu",
      "Red Hat",
      "Nginx",
      "Apache",
      "IP Addressing",
      "Cisco Packet Tracer",
    ],
  },
  {
    title: "Cybersecurity",
    items: [
      "Burp Suite",
      "OWASP Juice Shop",
      "IAM",
      "Access Control",
      "Web Vulnerability Testing",
    ],
  },
  {
    title: "AI & Data Science",
    items: [
      "Machine Learning",
      "NLP",
      "OpenCV",
      "NumPy",
      "Pandas",
      "TF-IDF",
      "Text Classification",
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      "Git",
      "GitHub",
      "Google Colab",
      "MySQL",
      "Flask",
      "Matplotlib",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Healthcare Appointment Booking System",
    category: "Cloud & DevSecOps",
    description:
      "A healthcare appointment platform with patient, doctor and admin roles. Developed using Flask and deployed on AWS EC2 with Docker, Nginx, HTTPS and CI/CD automation.",
    technologies: [
      "Python",
      "Flask",
      "AWS",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    number: "02",
    title: "Face Mask Segmentation",
    category: "Digital Image Processing",
    description:
      "An image processing project exploring face mask segmentation using Otsu thresholding, HSV and GrabCut techniques on a dataset of 222 images.",
    technologies: [
      "Python",
      "OpenCV",
      "NumPy",
      "Image Processing",
    ],
    link: "https://github.com/lekshmirnair540-cpu/-face-mask-segmentation-dip",
  },
  {
    number: "03",
    title: "Food Craving and Preference Detector",
    category: "Natural Language Processing",
    description:
      "An NLP project that analyzes food preferences and predicts cuisine categories using TF-IDF and Logistic Regression.",
    technologies: ["Python", "Pandas", "NLP", "TF-IDF"],
  },
  {
    number: "04",
    title: "Library Management System",
    category: "Software Development",
    description:
      "A Java and MySQL application designed to manage library records and book management operations.",
    technologies: ["Java", "MySQL"],
  },
];

function SectionHeading({ number, title, subtitle }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

function ProfilePhoto() {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div className="profile-frame">
      <div className="profile-orbit orbit-one" />
      <div className="profile-orbit orbit-two" />

      {imageLoaded ? (
        <img
          src="/profile.jpeg"
          alt="Lekshmi R Nair"
          className="profile-image"
          onError={() => setImageLoaded(false)}
        />
      ) : (
        <div className="profile-fallback">
          <span>LRN</span>
          <p>Profile photo not found</p>
          <small>Place profile.jpeg inside public folder</small>
        </div>
      )}

      <div className="photo-label">
        <span>LEKSHMI R NAIR</span>
        <small>Technology Enthusiast</small>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          L<span>.</span>R
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact" className="nav-contact">
            Contact
          </a>
        </div>
      </nav>

      <main>

        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="hero-greeting">HELLO, I'M</span>

            <h1 className="hero-title">
              Lekshmi R
              <span>Nair.</span>
            </h1>

            <h2 className="hero-role">
              BCA (Honours) Student
              <span>Cloud • DevOps • AI/ML</span>
            </h2>

            <p className="hero-description">
              Passionate about building technology-driven
              solutions through cloud computing, software
              development, cybersecurity and artificial
              intelligence.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button button-dark">
                Explore My Work
              </a>

              <a href="#contact" className="button button-outline">
                Get In Touch
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/lekshmirnair540-cpu"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/lekshmi-r-nair-7a679b330"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:lekshmirnair540@gmail.com">
                Email ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <ProfilePhoto />

            <div className="scene-wrapper">
              <Scene3D />
            </div>

            <span className="floating-tag tag-one">
              Cloud Computing
            </span>

            <span className="floating-tag tag-two">
              Artificial Intelligence
            </span>
          </div>

          <a href="#about" className="scroll-indicator">
            SCROLL TO EXPLORE ↓
          </a>
        </section>

        {/* ABOUT SECTION */}
        <section className="section about-section" id="about">
          <SectionHeading
            number="01"
            title="About Me"
            subtitle="A little introduction"
          />

          <div className="about-content">
            <div className="about-text">
              <h3>
                Learning today.
                <span> Building tomorrow.</span>
              </h3>

              <p>
                I am a BCA (Honours) student at Marian College
                Kuttikkanam, with a strong interest in cloud
                computing, DevOps, cybersecurity and artificial
                intelligence.
              </p>

              <p>
                I completed an 8-week, 240-hour industry
                internship in AI-Integrated Cloud, DevOps and
                Cybersecurity at IPSR Solutions Limited.
              </p>

              <p>
                I enjoy learning new technologies, solving
                practical problems and developing projects that
                connect academic knowledge with real-world
                applications.
              </p>

              <a
                href="https://github.com/lekshmirnair540-cpu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Explore my GitHub projects ↗
              </a>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <strong>240+</strong>
                <span>Internship Hours</span>
              </div>

              <div className="stat-card">
                <strong>13</strong>
                <span>Hands-on Labs</span>
              </div>

              <div className="stat-card">
                <strong>88%</strong>
                <span>Internship Score</span>
              </div>

              <div className="stat-card">
                <strong>2027</strong>
                <span>Graduation</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section skills-section" id="skills">
          <SectionHeading
            number="02"
            title="Technical Skills"
            subtitle="Technologies and tools I work with"
          />

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>

                <div className="skill-tags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="section" id="experience">
          <SectionHeading
            number="03"
            title="Experience"
            subtitle="My professional learning journey"
          />

          <article className="experience-card">
            <div className="experience-top">
              <div>
                <span className="experience-label">
                  INTERNSHIP
                </span>

                <h3>
                  AI-Integrated Cloud, DevOps & Cybersecurity
                </h3>

                <h4>IPSR Solutions Limited</h4>
              </div>

              <span className="experience-date">
                April – June 2026
              </span>
            </div>

            <p>
              Completed an 8-week, 240-hour industry-oriented
              internship involving practical cloud, DevOps and
              cybersecurity training.
            </p>

            <ul>
              <li>
                Completed 13 hands-on labs and a live capstone
                project.
              </li>
              <li>
                Practised AWS, Linux, Docker, Ansible and CI/CD
                workflows.
              </li>
              <li>
                Worked with cloud/server deployment and
                infrastructure automation.
              </li>
              <li>
                Practised SQL injection and XSS security testing.
              </li>
              <li>
                Achieved 5th rank in the internship batch with
                an 88% score.
              </li>
            </ul>
          </article>
        </section>

        {/* PROJECTS SECTION */}
        <section className="section projects-section" id="projects">
          <SectionHeading
            number="04"
            title="Featured Projects"
            subtitle="Some things I have built and explored"
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.number}
              >
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="section education-section" id="education">
          <SectionHeading
            number="05"
            title="Education"
            subtitle="My academic background"
          />

          <div className="education-card">
            <span className="education-year">
              EXPECTED 2027
            </span>

            <h3>
              Bachelor of Computer Applications (Honours)
            </h3>

            <p>
              Marian College Kuttikkanam (Autonomous)
            </p>

            <span className="education-location">
              Kerala, India
            </span>
          </div>
        </section>

        {/* LEADERSHIP SECTION */}
        <section className="section leadership-section">
          <SectionHeading
            number="06"
            title="Leadership & Activities"
            subtitle="Beyond academics"
          />

          <div className="leadership-grid">
            <div className="leadership-card">
              <span>01</span>
              <h3>Vice President</h3>
              <p>
                Adventure Sports Club, Marian College
                Kuttikkanam
              </p>
            </div>

            <div className="leadership-card">
              <span>02</span>
              <h3>College Dance Club</h3>
              <p>
                Active participation in college activities
              </p>
            </div>

            <div className="leadership-card">
              <span>03</span>
              <h3>IQAC Representative</h3>
              <p>
                Student representation and coordination
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section contact-section" id="contact">
          <span className="section-number">07</span>

          <h2>
            Let's create <span>something great.</span>
          </h2>

          <p>
            I am open to opportunities, collaborations and
            conversations about technology.
          </p>

          <a
            href="mailto:lekshmirnair540@gmail.com"
            className="button button-gold"
          >
            Send Me an Email ↗
          </a>

          <div className="contact-links">
            <a
              href="https://github.com/lekshmirnair540-cpu"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/lekshmi-r-nair-7a679b330"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:lekshmirnair540@gmail.com">
              Email
            </a>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          L<span>.</span>R
        </a>

        <p>
          © {new Date().getFullYear()} Lekshmi R Nair.
          All rights reserved.
        </p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
