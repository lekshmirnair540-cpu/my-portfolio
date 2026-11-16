
import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: "AI-Integrated Cloud, DevOps & Cybersecurity",
      issuer: "IPSR Solutions Limited",
      date: "May 2026",
      image: "/certificates/ipsr-ai-cloud-devops-cybersecurity-30-hours.jpg",
      category: "Technical",
    },
    {
      title: "8 Weeks Internship – Cloud, DevOps & Cybersecurity",
      issuer: "IPSR Solutions Limited",
      date: "June 2026",
      image: "/certificates/ipsr-cloud-devops-cybersecurity-internship.jpg",
      category: "Internship",
    },
    {
      title: "Getting Started with OpenShift AI for Future Careers",
      issuer: "Red Hat & IPSR Solutions",
      date: "April 2026",
      image: "/certificates/redhat-openshift-ai-webinar.jpg",
      category: "Technical",
    },
    {
      title: "Automate IT the Smart Way with Ansible",
      issuer: "Red Hat & IPSR Solutions",
      date: "May 2026",
      image: "/certificates/redhat-ansible-webinar.jpg",
      category: "Technical",
    },
    {
      title: "Introduction to Digital Marketing",
      issuer: "Simplilearn SkillUp",
      date: "July 2026",
      image: "/certificates/simplilearn-digital-marketing.jpg",
      category: "Course",
    },
    {
      title: "Viksit Bharat Young Leaders Dialogue",
      issuer: "Ministry of Youth Affairs & Sports",
      date: "September 2026",
      image: "/certificates/viksit-bharat-young-leaders-dialogue.png",
      category: "Participation",
    },
    {
      title: "Sadgamaya '25 – Nakshatra Sandhya",
      issuer: "Angels' Village, Ponkunnam",
      date: "January 2025",
      image: "/certificates/sadgamaya-cultural-participation.png",
      category: "Participation",
    },
    {
      title: "Responsible Computing Challenge",
      issuer: "Mozilla & Marian College",
      date: "February 2025",
      image: "/certificates/mozilla-responsible-computing-appreciation.jpg",
      category: "Appreciation",
    },
    {
      title: "Blood Donation Certificate",
      issuer: "Kerala State Blood Transfusion Council",
      date: "November 2025",
      image: "/certificates/blood-donation-certificate.jpg",
      category: "Volunteering",
    },
    {
      title: "Organisational Contribution – Adventure Sports Club",
      issuer: "Marian College Kuttikkanam",
      date: "2025",
      image: "/certificates/adventure-sports-club-appreciation.jpg",
      category: "Leadership",
    },
  ];

  const projects = [
    {
      title: "Healthcare Appointment Booking System",
      description:
        "A DevSecOps capstone project featuring patient, doctor and admin roles, secure authentication, appointment management and cloud deployment.",
      technologies: "Python · Flask · AWS · Docker · GitHub Actions",
    },
    {
      title: "Face Mask Segmentation",
      description:
        "An image processing project using segmentation techniques such as Otsu thresholding, HSV and GrabCut, evaluated using IoU and Dice score.",
      technologies: "Python · OpenCV · NumPy",
      link: "https://github.com/lekshmirnair540-cpu/-face-mask-segmentation-dip",
    },
    {
      title: "Food Craving and Preference Detector",
      description:
        "An NLP-based project that analyses food preferences and predicts cuisine categories using text processing and machine learning.",
      technologies: "Python · NLP · TF-IDF · Logistic Regression",
    },
    {
      title: "Library Management System",
      description:
        "A Java-based application designed to manage library records and book-related operations using a database.",
      technologies: "Java · MySQL",
    },
  ];

  const skills = [
    {
      title: "Programming",
      items: ["Python", "Java", "C++", "SQL"],
    },
    {
      title: "Cloud & DevOps",
      items: ["AWS", "Azure", "Docker", "Ansible", "CI/CD", "GitHub Actions"],
    },
    {
      title: "Networking & Linux",
      items: ["Linux", "Ubuntu", "RHEL", "Nginx", "IP Addressing", "Cisco Packet Tracer"],
    },
    {
      title: "AI & Machine Learning",
      items: ["NLP", "OpenCV", "NumPy", "Pandas", "Text Classification", "Image Processing"],
    },
    {
      title: "Cybersecurity",
      items: ["Burp Suite", "OWASP Juice Shop", "Access Control", "Security Testing"],
    },
    {
      title: "Database & Tools",
      items: ["MySQL", "Git", "GitHub", "Google Colab", "VS Code"],
    },
  ];

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
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-subtitle">HELLO, I'M</p>

          <h1 className="hero-title">
            Lekshmi R Nair
          </h1>

          <h2>
            BCA (Honours) Student | IT Fresher
          </h2>

          <p className="hero-description">
            Passionate about Cloud Computing, DevOps, Cybersecurity
            and Artificial Intelligence. I enjoy learning new technologies
            and building practical solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/lekshmirnair540-cpu"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/lekshmi-r-nair-7a679b330"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="mailto:lekshmirnair540@gmail.com">
              Email
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-frame">
            <div className="profile-placeholder">
              <span>LRN</span>
              <p>LEKSHMI R NAIR</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <p>
            I am a BCA (Honours) student at Marian College Kuttikkanam
            Autonomous, Kerala, with an interest in Cloud Computing,
            DevOps, Cybersecurity and AI/ML.
          </p>

          <p>
            I completed an 8-week, 240-hour industry internship in
            AI-Integrated Cloud, DevOps and Cybersecurity at IPSR
            Solutions Limited. During this internship, I gained
            practical experience in cloud infrastructure, Linux
            administration, Docker, Ansible, CI/CD pipelines and
            security testing.
          </p>

          <p>
            I enjoy exploring technology, working on projects and
            continuously improving my technical and problem-solving skills.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>8 Weeks</h3>
            <p>Industry Internship</p>
          </div>

          <div className="stat-card">
            <h3>240 Hours</h3>
            <p>Practical Training</p>
          </div>

          <div className="stat-card">
            <h3>5th Rank</h3>
            <p>Internship Achievement</p>
          </div>

          <div className="stat-card">
            <h3>2027</h3>
            <p>Expected Graduation</p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-heading">
          <p>WHAT I WORK WITH</p>
          <h2>Technical Skills</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.title}</h3>

              <div className="skill-tags">
                {skill.items.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section" id="experience">
        <div className="section-heading">
          <p>MY PROFESSIONAL JOURNEY</p>
          <h2>Experience</h2>
        </div>

        <div className="experience-card">
          <div className="experience-top">
            <h3>Cloud, DevOps & Cybersecurity Intern</h3>
            <span>April – June 2026</span>
          </div>

          <h4>IPSR Solutions Limited</h4>

          <p>
            Completed an 8-week (240-hour) internship focused on
            AI-Integrated Cloud, DevOps and Cybersecurity.
          </p>

          <ul>
            <li>Worked with AWS and Azure cloud infrastructure.</li>
            <li>Practised Linux server administration and monitoring.</li>
            <li>Worked with Docker, Ansible and CI/CD pipelines.</li>
            <li>Explored cybersecurity concepts and vulnerability testing.</li>
            <li>Worked on a cloud-integrated capstone project.</li>
            <li>Achieved 5th rank with 88% in the internship batch.</li>
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section" id="projects">
        <div className="section-heading">
          <p>MY RECENT WORK</p>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <span className="project-number">
                0{index + 1}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="section certificates-section" id="certificates">
        <div className="section-heading">
          <p>MY LEARNING JOURNEY</p>
          <h2>Certificates & Achievements</h2>
          <span>
            Professional training, technical learning and participation.
          </span>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <div className="certificate-card" key={index}>
              <button
                type="button"
                className="certificate-image-button"
                onClick={() => setSelectedCertificate(certificate)}
                aria-label={`View ${certificate.title}`}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                />
                <span className="view-certificate">
                  View Certificate
                </span>
              </button>

              <div className="certificate-info">
                <span className="certificate-category">
                  {certificate.category}
                </span>

                <h3>{certificate.title}</h3>

                <p>{certificate.issuer}</p>

                <small>{certificate.date}</small>
              </div>
            </div>
          ))}
        </div>

        {/* CERTIFICATE POPUP */}
        {selectedCertificate && (
          <div
            className="certificate-modal"
            onClick={() => setSelectedCertificate(null)}
          >
            <button
              className="close-modal"
              type="button"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate"
            >
              ×
            </button>

            <div
              className="certificate-modal-content"
              onClick={(event) => event.stopPropagation()}
            >
              <h3>{selectedCertificate.title}</h3>

              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
              />

              <p>{selectedCertificate.issuer}</p>
              <small>{selectedCertificate.date}</small>
            </div>
          </div>
        )}
      </section>

      {/* ACHIEVEMENTS */}
      <section className="section" id="achievements">
        <div className="section-heading">
          <p>RECOGNITION</p>
          <h2>Achievements</h2>
        </div>

        <div className="achievement-card">
          <img
            src="/achievements/ipsr-internship-5th-rank-88-percent.jpg"
            alt="IPSR internship ranking achievement"
            loading="lazy"
          />

          <div>
            <span>IPSR Solutions Limited · 2026</span>
            <h3>5th Rank in Internship Batch</h3>
            <p>
              Secured 5th position with 88% in the Cloud, DevOps
              and Cybersecurity internship.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="section-heading">
          <p>ACADEMIC BACKGROUND</p>
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <h3>BCA (Honours)</h3>
          <p>Marian College Kuttikkanam Autonomous</p>
          <span>Kerala · Expected 2027</span>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <p>LET'S CONNECT</p>
          <h2>Contact Me</h2>
        </div>

        <p>
          I am open to opportunities, collaborations and learning
          experiences in technology.
        </p>

        <div className="contact-card">
          <a href="mailto:lekshmirnair540@gmail.com">
            lekshmirnair540@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/lekshmi-r-nair-7a679b330"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>

          <a
            href="https://github.com/lekshmirnair540-cpu"
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Lekshmi R Nair.
          Designed with passion.
        </p>
      </footer>
    </div>
  );
}

export default App;
