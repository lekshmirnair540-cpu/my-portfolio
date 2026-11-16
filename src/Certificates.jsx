
import "./Certificates.css";

const certificates = [
  {
    title: "AI-Integrated Cloud, DevOps & Cybersecurity",
    issuer: "IPSR Solutions Ltd.",
    date: "May 2026",
    image: "/certificates/ipsr-ai-cloud-devops-cybersecurity-30-hours.jpg",
  },
  {
    title: "Cloud, DevOps & Cybersecurity Internship",
    issuer: "IPSR Solutions Ltd.",
    date: "June 2026",
    image: "/certificates/ipsr-cloud-devops-cybersecurity-internship.jpg",
  },
  {
    title: "Digital Marketing Fundamentals",
    issuer: "Simplilearn SkillUp",
    date: "July 2026",
    image: "/certificates/simplilearn-digital-marketing.jpg",
  },
  {
    title: "Getting Started with OpenShift AI",
    issuer: "Red Hat & IPSR",
    date: "April 2026",
    image: "/certificates/redhat-openshift-ai-webinar.jpg",
  },
  {
    title: "Automate IT the Smart Way with Ansible",
    issuer: "Red Hat & IPSR",
    date: "May 2026",
    image: "/certificates/redhat-ansible-webinar.jpg",
  },
  {
    title: "Viksit Bharat Young Leaders Dialogue 2027",
    issuer: "Ministry of Youth Affairs & Sports",
    date: "14 September 2026",
    image: "/certificates/viksit-bharat-young-leaders-dialogue.png",
  },
  {
    title: "Sadgamaya '25 – Nakshatra Sandhya",
    issuer: "Angels' Village",
    date: "January 2025",
    image: "/certificates/sadgamaya-cultural-participation.png",
  },
  {
    title: "Blood Donation",
    issuer: "Kerala State Blood Transfusion Council",
    date: "5 November 2025",
    image: "/certificates/blood-donation-certificate.jpg",
  },
  {
    title: "Responsible Computing Challenge",
    issuer: "Mozilla & Marian College",
    date: "11–12 February 2025",
    image: "/certificates/mozilla-responsible-computing-appreciation.jpg",
  },
  {
    title: "Organisational Contribution",
    issuer: "Adventure Sports Club, Marian College",
    date: "College recognition",
    image: "/certificates/adventure-sports-club-appreciation.jpg",
  },
];

function Certificates() {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-heading">
        <span>MY ACHIEVEMENTS</span>
        <h2>Certificates & Recognition</h2>
        <p>
          Every certificate represents a step in my learning journey,
          professional development and personal growth.
        </p>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <article className="certificate-card" key={certificate.title}>
            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-image"
              aria-label={`View ${certificate.title}`}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                loading="lazy"
              />
              <span className="certificate-view">
                View Certificate ↗
              </span>
            </a>

            <div className="certificate-info">
              <span className="certificate-number">
                CERTIFICATE {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{certificate.title}</h3>
              <p>{certificate.issuer}</p>
              <small>{certificate.date}</small>
            </div>
          </article>
        ))}
      </div>

      <div className="achievement-card">
        <div className="achievement-image">
          <img
            src="/achievements/ipsr-internship-5th-rank-88-percent.jpg"
            alt="IPSR internship ranking poster showing fifth rank and 88 percent"
            loading="lazy"
          />
        </div>

        <div className="achievement-content">
          <span>PROFESSIONAL ACHIEVEMENT</span>
          <h3>5th Rank in Internship Batch</h3>
          <div className="achievement-score">88%</div>
          <p>
            Secured 5th position in the Summer Internship in
            Cloud, DevOps & Cybersecurity conducted by
            IPSR Solutions Ltd.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
