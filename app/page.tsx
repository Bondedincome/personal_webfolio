import Image from "next/image";
import { PortfolioMotion } from "./portfolio-motion";
import { PortfolioNav, RoleCycle } from "./portfolio-interactions";

const links = {
  github: "https://github.com/BondedIncome",
  linkedin: "https://www.linkedin.com/in/daniot-woldetinsae-339286240",
  email: "mailto:daniotmw10@gmail.com",
  resume: "/Daniot_Resume.pdf",
};

function SocialIcon({ name }: { name: "GitHub" | "LinkedIn" | "Email" }) {
  if (name === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.15a10.65 10.65 0 0 1 5.57 0c2.13-1.45 3.06-1.15 3.06-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
        />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M5.2 3.5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM3.7 8.5h3v11h-3v-11Zm4.9 0h2.9V10h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.61 2 3.61 4.6v6.46h-3v-5.73c0-1.37-.03-3.13-1.91-3.13-1.91 0-2.2 1.49-2.2 3.03v5.83h-3v-11Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M3.5 5.5h17v13h-17zM4 6l8 6.5L20 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

type Company = {
  name: string;
  // Shown in the logo tile until a real logo is added.
  initials: string;
  // Optional: path to a square logo in /public, e.g. "/logos/mmcy-logo.png".
  logo?: string;
  roles: Array<{
    title: string;
    when: string;
    description: string;
    current?: boolean;
  }>;
};

const companies: Company[] = [
  {
    name: "MMCY",
    initials: "MM",
    logo: "/logos/mmcy-logo.png",
    roles: [
      {
        title: "Cvent developer",
        when: "2026 to today",
        description:
          "Building event sites, registration flows, emails and reporting, then fixing platform issues so attendees never notice them.",
        current: true,
      },
    ],
  },
  {
    name: "IE Networks Solutions",
    initials: "IE",
    logo: "/logos/ie-networks.png",
    roles: [
      {
        title: "Backend developer, contract",
        when: "Aug to Sept 2025",
        description:
          "Backend for a CRM in NestJS, PostgreSQL and TypeORM, with soft delete and audit logs built in.",
      },
      {
        title: "Full-stack developer",
        when: "Mar to Jul 2025",
        description:
          "An inventory and sales system with role-based access for admins, staff and managers.",
      },
    ],
  },
  {
    name: "Information Network Security Administration (INSA)",
    initials: "IN",
    logo: "/logos/insa.png",
    roles: [
      {
        title: "Android and web pen testing, audit team",
        when: "2024 to 2025",
        description:
          "Penetration tests on Android apps and web platforms: static and dynamic APK analysis with MobSF, Burp Suite and ADB, OWASP Top 10 testing for XSS, SQLi, IDOR and CSRF, and clear reports with proof-of-concept exploits and fixes for development teams.",
      },
    ],
  },
  {
    name: "Yenetta Code",
    initials: "YC",
    logo: "/logos/yenetta-code.png",
    roles: [
      {
        title: "Python teacher",
        when: "2022 to 2023",
        description:
          "Loops, conditionals and games with turtle and pygame, for students aged 13 to 19.",
      },
    ],
  },
];

function CompanyLogo({ company }: { company: Company }) {
  return (
    <div className="xp-logo" aria-hidden="true">
      {company.logo ? (
        <Image src={company.logo} alt="" width={48} height={48} />
      ) : (
        company.initials
      )}
    </div>
  );
}

const projects = [
  {
    name: "Anonymous bot for AAU 4-Kilo students",
    description:
      "A bot that lets students reach fellow students and say what they’re feeling without a name attached. Because nobody should carry a hard week alone.",
    tags: ["Chat bot", "Anonymity by design"],
  },
  {
    name: "Inventory and sales system",
    description:
      "Users, roles, products, sales and purchases in one place. Soft delete and audit logs mean nothing quietly disappears.",
    tags: ["Express.js", "PostgreSQL", "Prisma", "React"],
  },
  {
    name: "CRM backend",
    description:
      "The API behind a customer relationship tool: leads, deals, activities and roles, with audit trails and clean data models.",
    tags: ["NestJS", "PostgreSQL", "TypeORM"],
  },
  {
    name: "Cvent event experiences",
    description:
      "Event websites, registration workflows, emails and reporting built to client requirements, so attendees just sign up and show up.",
    tags: ["Cvent"],
  },
];

export default function Home() {
  return (
    <>
      <PortfolioMotion />
      <div className="layout">
        <aside>
          <div>
            <h1>
              <span className="line">
                <span>Daniot</span>
              </span>
              <span className="line">
                <span>Mihrete.</span>
              </span>
            </h1>
            <p className="role">Full-stack developer, backend and cloud</p>
            <p className="tag">
              <RoleCycle />
            </p>
            <PortfolioNav />
          </div>
          <div className="side-foot">
            <a className="btn" href={links.resume} download>
              Download resume
            </a>
            <div className="socials">
              <a
                className="social-link"
                href={links.github}
                aria-label="GitHub"
                title="GitHub"
              >
                <SocialIcon name="GitHub" />
              </a>
              <a
                className="social-link"
                href={links.linkedin}
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <SocialIcon name="LinkedIn" />
              </a>
              <a
                className="social-link"
                href={links.email}
                aria-label="Email"
                title="Email"
              >
                <SocialIcon name="Email" />
              </a>
            </div>
          </div>
        </aside>

        <main>
          <section id="about" className="about">
            <h2>About</h2>
            <p className="about-lead">
              Hi, I’m Daniot. I live in Addis Ababa, Ethiopia, and studied
              Computer Science at Addis Ababa University (2022 to 2026). I now
              work at <strong>MMCY</strong>, both on-site and remotely.
            </p>
            <ul className="about-focus">
              <li>
                <span aria-hidden="true">🧰</span> Backend Developer
              </li>
              <li>
                <span aria-hidden="true">💻</span> Cybersecurity &amp; Ethical
                Hacking
              </li>
              <li>
                <span aria-hidden="true">📲</span> App Development &amp;
                Problem-Solving
              </li>
              <li>
                <span aria-hidden="true">✍️</span> Thought-Provoking Essays on
                Tech, Life &amp; Growth
              </li>
            </ul>
            <p>
              Beyond code, I’m a die-hard Kendrick fan, a gym enthusiast, and an
              Arsenal supporter who still believes in miracles.{" "}
              <span aria-hidden="true">🎵🏋️‍♂️⚽</span>
            </p>
            <a
              className="btn ghost book-call"
              href="https://calendar.app.google/K5KAmbX7vqZgYEgC7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call <span aria-hidden="true">→</span>
            </a>
          </section>

          <section id="experience">
            <h2>Experience</h2>
            <ol className="xp">
              {companies.map((company) => (
                <li className="xp-company" key={company.name}>
                  <CompanyLogo company={company} />
                  {company.roles.length === 1 ? (
                    <div className="xp-body">
                      <h3>{company.roles[0].title}</h3>
                      <span className="xp-org">{company.name}</span>
                      <span className="xp-when">
                        {company.roles[0].when}
                        {company.roles[0].current && (
                          <span className="xp-now">Current</span>
                        )}
                      </span>
                      <p>{company.roles[0].description}</p>
                    </div>
                  ) : (
                    <div className="xp-body">
                      <h3>{company.name}</h3>
                      <ol className="xp-roles">
                        {company.roles.map((role) => (
                          <li className="xp-role" key={role.title}>
                            <h4>{role.title}</h4>
                            <span className="xp-when">
                              {role.when}
                              {role.current && (
                                <span className="xp-now">Current</span>
                              )}
                            </span>
                            <p>{role.description}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </li>
              ))}
            </ol>
            <div className="cta">
              <div>
                <strong>Want this on your team?</strong>
                <span>
                  I’m open to new roles and projects. Let’s talk about yours.
                </span>
              </div>
              <div className="cta-btns">
                <a
                  className="btn"
                  href="mailto:daniotmw10@gmail.com?subject=Let%E2%80%99s%20work%20together"
                >
                  Get in touch
                </a>
                <a className="btn ghost" href="#projects">
                  See my projects
                </a>
              </div>
            </div>
          </section>

          <section id="projects">
            <h2>Projects</h2>
            <ol className="list">
              {projects.map((project) => (
                <li className="item solo" key={project.name}>
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <ul className="tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="toolbox">
            <h2>Toolbox</h2>
            <dl className="tools">
              <dt>Languages</dt>
              <dd>
                Python, JavaScript and TypeScript, Java, C and C++, Kotlin
              </dd>
              <dt>Backend</dt>
              <dd>NestJS, Node.js, Express.js</dd>
              <dt>Frontend</dt>
              <dd>React, Next.js, HTML and CSS</dd>
              <dt>Data</dt>
              <dd>PostgreSQL, MySQL</dd>
              <dt>Cloud</dt>
              <dd>AWS, Git and GitHub, Linux, Bash</dd>
              <dt>Security</dt>
              <dd>Burp Suite, Postman, ADB</dd>
              <dt>Design</dt>
              <dd>Figma, Lucid Chart</dd>
            </dl>
            <p className="certs">
              Certified in Scientific Computing with Python and Relational
              Databases (freeCodeCamp), ALX AiCE, ALX AWS Cloud Practitioner,
              and the Google Cloud Program.
            </p>
          </section>

          <section id="contact" className="hi">
            <h2>Say hi</h2>
            <a className="mail" href="mailto:daniotmw10@gmail.com">
              daniotmw10@gmail.com
            </a>
            <p>
              Based in Addis Ababa, open to new projects and teams. Tell me
              what you’re building.
            </p>
            <footer>© 2026 Daniot Mihrete Woldetinsae</footer>
          </section>
        </main>
      </div>
    </>
  );
}
