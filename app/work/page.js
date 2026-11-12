import SiteHeader from "../components/site-header";
import Reveal from "../components/reveal";
import ProjectPreview from "../components/project-preview";
import projects from "../../content/projects.json";

const archive = projects;

export const metadata = {
  title: "Work Archive — Murtaza Siddiqui",
  description: "A collection of client websites, brand experiences, portfolios and creative experiments by Murtaza Siddiqui.",
};

function Kicker({left,right}) {
  return <div className="section-kicker"><span>{left}</span><span>{right}</span></div>;
}

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="archive-page">
        <section className="archive-hero dark-section">
          <div className="archive-hero-inner">
            <p className="eyebrow light-eyebrow"><span className="status-dot" /> THE WORK ARCHIVE <span className="eyebrow-line" /> SELECTED BUILDS & EXPERIMENTS</p>
            <h1>A broader look<br/>at what I <em>create.</em></h1>
            <p>Client work, digital experiences, personal projects and experiments — collected in one place.</p>
            <a className="archive-back-link" href="/#work">← BACK TO SELECTED WORK</a>
          </div>
        </section>
        <section className="archive-list section-pad">
          <Kicker left="THE FULL COLLECTION" right={`${archive.length.toString().padStart(2,"0")} PROJECTS & COUNTING`} />
          <div className="archive-grid">
            {archive.map((project) => (
              <Reveal key={project.number}>
                <article className="showcase-card archive-card">
                  {project.href ? <ProjectPreview title={project.title} href={project.href} /> : (
                    <div className="showcase-preview showcase-preview-pending">
                      <span className="pending-mark">{project.title === "Naeem Impex" ? "NI." : project.title === "For Her" ? "FH." : project.title === "My Surge Projects" ? "MS." : "EP."}</span>
                      <span className="pending-label">{project.status}</span>
                    </div>
                  )}
                  <div className="showcase-card-info">
                    <div className="showcase-card-meta"><span>{project.number} / {project.category}</span>{project.href ? <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>↗</a> : <span className="archive-status">{project.status}</span>}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    {project.slug && (
                      <a className="case-study-card-link" href={`/work/${project.slug}`}>
                        READ CASE STUDY <span>↗</span>
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="archive-footer-note"><span>MORE WORK IS ALWAYS TAKING SHAPE.</span><a href="/#contact">HAVE A PROJECT IN MIND? ↗</a></div>
        </section>
      </main>
      <footer className="footer">
        <a className="wordmark" href="/#top" aria-label="Murtaza Siddiqui home"><img className="brand-logo footer-logo" src="/images/logo.jpg" alt="Murtaza Siddiqui logo" /></a>
        <span>© {new Date().getFullYear()} MURTAZA SIDDIQUI</span>
        <a href="/#top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
