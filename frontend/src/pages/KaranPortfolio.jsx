import { useEffect, useState } from "react";
import "./karan-portfolio.css";

import p01 from "../assets/protfolio/portfolio-page-01.jpg";
import p02 from "../assets/protfolio/portfolio-page-02.jpg";
import p03 from "../assets/protfolio/portfolio-page-03.jpg";
import p04 from "../assets/protfolio/portfolio-page-04.jpg";
import p05 from "../assets/protfolio/portfolio-page-05.jpg";
import p06 from "../assets/protfolio/portfolio-page-06.jpg";
import p07 from "../assets/protfolio/portfolio-page-07.jpg";
import p08 from "../assets/protfolio/portfolio-page-08.jpg";

const pages = [
  { file: p01, label: "Cover" },
  { file: p02, label: "Director's desk" },
  { file: p03, label: "The science of dance" },
  { file: p04, label: "Academic framework" },
  { file: p05, label: "Industry credentials" },
  { file: p06, label: "K-Unit ecosystem" },
  { file: p07, label: "Impact" },
  { file: p08, label: "Contact" },
];

/**
 * Faithful React rendition of the supplied Karan Gaikwad portfolio.
 * Keep this component beside the included `assets` directory.
 */
export default function KaranPortfolio() {
  const [activePage, setActivePage] = useState(0);
  const page = pages[activePage];

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "ArrowRight") setActivePage((current) => Math.min(current + 1, pages.length - 1));
      if (event.key === "ArrowLeft") setActivePage((current) => Math.max(current - 1, 0));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="karan-portfolio" aria-label="Karan Gaikwad portfolio">
      <header className="portfolio-topbar">
        <a className="portfolio-brand" href="#portfolio-page">K-UNIT <span>DANCE SCHOOL</span></a>
        <p>{String(activePage + 1).padStart(2, "0")} / {String(pages.length).padStart(2, "0")}</p>
      </header>

      <section className="portfolio-viewer" id="portfolio-page" aria-live="polite">
        <img
          key={page.file}
          className="portfolio-page"
          src={page.file}
          alt={`Karan Gaikwad portfolio - ${page.label}`}
        />
      </section>

      <nav className="portfolio-controls" aria-label="Portfolio pages">
        <button type="button" onClick={() => setActivePage((current) => Math.max(current - 1, 0))} disabled={activePage === 0}>
          ← Previous
        </button>
        <div className="page-dots">
          {pages.map((item, index) => (
            <button
              type="button"
              key={item.file}
              className={index === activePage ? "is-active" : ""}
              onClick={() => setActivePage(index)}
              aria-label={`Go to ${item.label}`}
              aria-current={index === activePage ? "page" : undefined}
            />
          ))}
        </div>
        <button type="button" onClick={() => setActivePage((current) => Math.min(current + 1, pages.length - 1))} disabled={activePage === pages.length - 1}>
          Next →
        </button>
      </nav>
    </main>
  );
}
