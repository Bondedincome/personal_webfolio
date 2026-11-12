"use client";

import { useEffect, useState } from "react";

const cyclePhrases = [
  "build APIs that don’t fall over.",
  "poke at my own apps before someone else does.",
  "once taught teenagers Python with turtles.",
  "learn the new tool so you don’t have to wait.",
];

const sections = ["about", "experience", "projects", "toolbox"];

// All phrases are rendered (first one visible without JS); PortfolioMotion
// adds the GSAP slide-through when motion is allowed.
export function RoleCycle() {
  return (
    <span className="cycle" id="cycle">
      {cyclePhrases.map((phrase, index) => (
        <span key={phrase} aria-hidden={index > 0 ? true : undefined}>
          I {phrase}
        </span>
      ))}
    </span>
  );
}

export function PortfolioNav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const targets = sections
      .map((id) => document.getElementById(id))
      .filter((target): target is HTMLElement => target !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) setActiveSection(visibleEntry.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="side" aria-label="Sections">
      <ul>
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={activeSection === section ? "active" : undefined}
              aria-current={activeSection === section ? "location" : undefined}
            >
              <span className="bar" aria-hidden="true" />
              {section === "contact"
                ? "Say hi"
                : section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
