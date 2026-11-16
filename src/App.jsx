
import Scene3D from "./components/Scene3D";
import "./App.css";

const skills = [
  "Java", "Python", "C++", "SQL",
  "AWS", "Microsoft Azure", "Docker",
  "Docker Compose", "Ansible", "CI/CD",
  "Linux", "Git", "GitHub", "MySQL",
  "OpenCV", "NumPy", "Pandas", "NLP",
  "Flask", "Image Processing",
  "Networking", "Cybersecurity"
];

const projects = [
  {
    number: "01",
    title: "Healthcare Appointment Booking System",
    category: "DevSecOps Capstone",
    description:
      "A Flask-based healthcare appointment platform deployed on AWS EC2. Includes patient, doctor and admin roles, CRUD operations, password hashing, rate limiting, HTTPS, Nginx, CI/CD and CloudWatch monitoring.",
    technologies: ["Python", "Flask", "AWS", "Docker", "GitHub Actions"]
  },
  {
    number: "02",
    title: "Face Mask Segmentation",
    category: "Digital Image Processing",
    description:
      "Compared Otsu thresholding, HSV and GrabCut segmentation techniques on 222 images using IoU, Dice coefficient and pixel accuracy.",
    technologies: ["Python", "OpenCV", "NumPy"],
    link: "https://github.com/lekshmirnair540-cpu/-face-mask-segmentation-dip"
  },
  {
    number: "03",
    title: "Food Craving and Preference Detector",
    category: "Natural Language Processing",
    description:
      "Built a text classification pipeline using 125 survey responses, TF-IDF feature extraction and Logistic Regression to classify nine cuisine classes.",
    technologies: ["Python", "Pandas", "TF-IDF", "NLP"],
    link: "https://github.com/lekshmirnair540-cpu/Food_Craving_Preference_Detector"
  },
  {
    number: "04",
    title: "Library Management System",
    category: "Application Development",
    description:
      "Developed a Java and MySQL application for book issue and return, member management and fine calculation.",
    technologies: ["Java", "MySQL"]
  }
];

const certifications = [
  "AI-Integrated Cloud, DevOps and Cybersecurity – IPSR Solutions Ltd.",
  "Digital Marketing Certificate",
  "Introduction to GitHub Basics",
  "Introduction to AI",
  "Red Hat Basics"
];

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          LEKSHMI<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk ↗
        </a>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-content">
          <p className="eyebrow animated-item">
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </p>

          <h1 className="hero-title animated-item delay-1">
            Hello, I'm
            <br />
            <span>Lekshmi R Nair</span>
          </h1>

          <h2 className="animated-item delay-2">
            BCA (Honours) Student | IT Fresher
          </h2>

          <p className="hero-description animated-item delay-3">
            Exploring the future of technology through Cloud Computing,
            DevOps, Software Development and Artificial Intelligence.
            I love building practical solutions and learning new technologies.
          </p>

          <div className="hero-buttons animated-item delay-4">
            <a href="#projects" className="primary-button">
              Explore My Work ↗
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="social-links animated-item delay-4">
            <a
              href="https://github.com/lekshmirnair540-cpu"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/lekshmi-r-nair-7a679b330"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="photo-glow"></div>

          <div className="profile-frame">
            <img src="/profile.jpeg" alt="Lekshmi R Nair" />
          </div>

          <div className="photo-label">
            <span>✦</span> CLOUD & TECH ENTHUSIAST
          </div>

          <div className="scene-wrapper">
            <Scene3D />
          </div>

          <div className="floating-tag tag-one">☁ Cloud Computing</div>
          <div className="floating-tag tag-two">✧ AI & Technology</div>
        </div>

        <div className="scroll-indicator">
          SCROLL TO EXPLORE ↓
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-heading">
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
        </div>

        <div className="about-content">
          <div>
            <h3>
              Technology, creativity and continuous learning.
            </h3>
          </div>

          <div>
            <p>
              I am a BCA (Honours) student at Marian College Kuttikkanam,
              passionate about Cloud Computing, DevOps, Software Development
              and Artificial Intelligence.
            </p>

            <p>
              I completed an 8-week, 240-hour internship at IPSR Solutions
              Limited, gaining hands-on experience with AWS, Azure, Linux,
              Docker, Ansible, CI/CD and Cybersecurity.
            </p>

            <p>
              During my internship, I completed 13 practical labs and a
              live cloud-deployed capstone project. I secured 5th rank
              in my internship batch with 88%.
            </p>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>240+</h3>
            <p>Internship Hours</p>
          </div>

          <div className="stat-card">
            <h3>13</h3>
            <p>Hands-on Labs</p>
          </div>

          <div className="stat-card">
            <h3>5th</h3>
            <p>Internship Rank</p>
          </div>

          <div className="stat-card">
            <h3>88%</h3>
            <p>Internship Score</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">MY TECHNICAL EXPERTISE</p>
          <h2>Skills & <span>Technologies</span></h2>
          <p className="section-subtitle">
            Technologies and tools I have explored through learning and projects.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill}
              style={{ "--i": index }}
            >
              <span className="skill-symbol">✦</span>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">MY PROFESSIONAL JOURNEY</p>
          <h2>Internship <span>Experience</span></h2>
        </div>

        <div className="experience-card">
          <div className="experience-top">
            <div>
              <h3>
                Intern – AI-Integrated Cloud, DevOps & Cybersecurity
              </h3>
              <p className="company">IPSR Solutions Limited</p>
            </div>

            <span className="date-tag">APRIL – JUNE 2026</span>
          </div>

          <ul>
            <li>Completed 13 hands-on labs and one capstone project.</li>
            <li>Deployed Apache and Nginx web servers on AWS EC2 and Azure VMs.</li>
            <li>Worked with VPC, VNet, security groups, IAM and RBAC.</li>
            <li>Containerized a Python To-Do application using Docker and Docker Compose.</li>
            <li>Built a CI/CD pipeline using Azure DevOps.</li>
            <li>Automated web server deployment using Ansible and Linux scripting.</li>
            <li>Practiced SQL injection and XSS testing using Burp Suite and OWASP Juice Shop.</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">WHAT I HAVE BUILT</p>
          <h2>Featured <span>Projects</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.number}
              style={{ "--i": index }}
            >
              <div className="project-number">{project.number}</div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* EDUCATION AND CERTIFICATIONS */}
      <section className="section" id="education">
        <div className="section-heading">
          <p className="eyebrow">ACADEMIC BACKGROUND</p>
          <h2>Education & <span>Certifications</span></h2>
        </div>

        <div className="education-card">
          <p className="eyebrow">EXPECTED 2027</p>
          <h3>BCA (Honours)</h3>
          <p>Marian College Kuttikkanam (Autonomous), Kerala</p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certificate, index) => (
            <div
              className="certificate-card"
              key={certificate}
              style={{ "--i": index }}
            >
              <span>✧</span>
              {certificate}
            </div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">BEYOND TECHNOLOGY</p>
          <h2>Leadership & <span>Activities</span></h2>
        </div>

        <div className="leadership-grid">
          <div className="leadership-card">
            <h3>Vice President</h3>
            <p>
              Adventure Sports Club, Marian College Kuttikkanam
            </p>
          </div>

          <div className="leadership-card">
            <h3>IQAC Representative</h3>
            <p>
              Internal Quality Assurance Cell, Marian College Kuttikkanam
            </p>
          </div>

          <div className="leadership-card">
            <h3>Member</h3>
            <p>College Dance Club</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Let's Build Something <span>Great</span></h2>

          <p className="section-subtitle">
            Open to entry-level opportunities in Cloud, DevOps,
            Software Development and AI/ML.
          </p>
        </div>

        <div className="contact-card">
          <a href="mailto:lekshmirnair540@gmail.com">
            ✉ Email Me – lekshmirnair540@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/lekshmi-r-nair-7a679b330"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/lekshmirnair540-cpu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          LEKSHMI<span>.</span>
        </a>

        <p>Designed & built with passion by Lekshmi R Nair © 2026</p>

        <a href="#home">Back to top ↑</a>
      </footer>

    </div>
  );
}

export default App;
