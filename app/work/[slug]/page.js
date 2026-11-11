import SiteHeader from "../../components/site-header";
import Reveal from "../../components/reveal";
import ProjectPreview from "../../components/project-preview";
import { caseStudies } from "../case-study-data";

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = caseStudies[slug];
  if (!project) return { title: "Case Study — Murtaza Siddiqui" };
  return {
    title: `${project.title} — Case Study | Murtaza Siddiqui`,
    description: project.summary,
  };
}

export default async function ProjectCaseStudy({ params }) {
  const { slug } = await params;
  const project = caseStudies[slug];
  if (!project) return <main className="case-study-page section-pad"><h1>Project not found.</h1><a className="text-link" href="/work">Back to the work archive ↗</a></main>;

  return (
    <>
      <SiteHeader />
      <main id="top" className="case-study-page">
        <section className="case-hero dark-section">
          <div className="case-hero-inner">
            <p className="eyebrow light-eyebrow"><span className="status-dot" /> CASE STUDY / {project.number}<span className="eyebrow-line" /> {project.category}</p>
            <Reveal><h1>{project.title.split(" ").slice(0, -1).join(" ")}<br /><em>{project.title.split(" ").slice(-1)[0]}.</em></h1></Reveal>
            <div className="case-hero-bottom">
              <p>{project.summary}</p>
              {project.url ? <a className="case-live-link" href={project.url} target="_blank" rel="noreferrer">VISIT LIVE WEBSITE <span>↗</span></a> : <span className="archive-status">{project.status}</span>}
            </div>
            <div className="case-details">
              {[["STATUS", project.status], ["MY ROLE", project.role], ["PLATFORM", project.platform], ["TYPE", project.category]].map(([label,value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
            </div>
          </div>
        </section>

        {project.url && <section className="case-preview-section section-pad"><div className="case-section-heading"><span className="case-kicker">01 / THE LIVE EXPERIENCE</span><p>Explore the project directly below. Scroll and interact with the embedded preview, or expand it when you want a closer look.</p></div><ProjectPreview title={project.title} href={project.url} /></section>}

        <section className="case-overview section-pad">
          <div className="case-overview-label"><span className="case-kicker">{project.url ? "02" : "01"} / THE BRIEF</span><span>FROM IDEA TO DIGITAL EXPERIENCE</span></div>
          <div className="case-overview-content"><h2>{project.brief.split(".")[0]} <em>with purpose.</em></h2><div><p>{project.brief}</p><p>{project.approach}</p></div></div>
        </section>

        <section className="case-build-section dark-section section-pad">
          <div className="case-section-heading case-section-heading-light"><span className="case-kicker">{project.url ? "03" : "02"} / THE WORK</span><p>The focus, decisions and deliverables behind this project.</p></div>
          <div className="case-capability-list">
            {project.deliverables.map((item,index) => <Reveal key={item}><article className="case-capability"><span>{String(index+1).padStart(2,"0")}</span><h3>{item}</h3><p>{index === 0 ? project.approach : `Part of the ${project.title} project scope, developed in line with the overall brief and intended experience.`}</p></article></Reveal>)}
          </div>
        </section>

        <section className="case-outcome section-pad"><span className="case-kicker">{project.url ? "04" : "03"} / THE OUTCOME</span><div className="case-outcome-grid"><h2>Clear intent.<br /><em>Thoughtful execution.</em></h2><div><p>{project.outcome}</p><a className="text-link" href="/work">Explore more projects <span>↗</span></a></div></div></section>
        <section className="case-next dark-section section-pad"><span className="case-kicker">HAVE A PROJECT IN MIND?</span><h2>Let’s build something<br /><em>that works beautifully.</em></h2><a className="case-live-link" href="/#contact">START A CONVERSATION <span>↗</span></a><a className="case-back-link" href="/work">← BACK TO THE WORK ARCHIVE</a></section>
      </main>
      <footer className="footer"><a className="wordmark" href="/#top" aria-label="Murtaza Siddiqui home"><img className="brand-logo footer-logo" src="/images/logo.jpg" alt="Murtaza Siddiqui logo" /></a><span>© {new Date().getFullYear()} MURTAZA SIDDIQUI</span><a href="/#top">BACK TO TOP ↑</a></footer>
    </>
  );
}
