import SiteHeader from "../components/site-header";
import Reveal from "../components/reveal";
import ProjectPreview from "../components/project-preview";

const archive = [
  { number:"01", category:"CLIENT WEBSITE", title:"Sterling Bloom", slug:"sterling-bloom", description:"A refined digital home for an event design and decor business, with custom site functionality and an administrative experience.", tags:["Next.js","Responsive design","Admin experience"], href:"https://sterlingbloom.vercel.app/" },
  { number:"02", category:"BUSINESS WEBSITE", title:"CRC Core", slug:"crc-core", description:"A focused business website built to give the brand a clear online presence, supported by custom content and admin functionality.", tags:["Web development","Content structure","Admin features"], href:"https://thecrccore.vercel.app/" },
  { number:"03", category:"CORPORATE WEBSITE · IN DEVELOPMENT", title:"Naeem Impex", slug:"naeem-impex", description:"A corporate digital presence for a textile and apparel manufacturer, focused on communicating its in-house production capabilities.", tags:["Corporate website","Textile manufacturing","Next.js"], status:"IN DEVELOPMENT" },
  { number:"04", category:"MULTI-STORE E-COMMERCE", title:"Eisha's Collection", slug:"eishas-collection", description:"A connected fashion, beauty and jewelry brand direction, bringing multiple storefront ideas into one cohesive digital identity.", tags:["E-commerce","Brand direction","Storefronts"], href:"https://eishas.vercel.app/" },
  { number:"05", category:"FASHION EDITORIAL CONCEPT", title:"ForMe", slug:"forme", description:"A luxury fashion lookbook concept exploring editorial art direction, considered typography and expressive motion.", tags:["Next.js","GSAP","Editorial design"], href:"https://forme-mu-dun.vercel.app/" },
  { number:"06", category:"CREATIVE PROFESSIONAL PORTFOLIO", title:"Junaid's Portfolio", slug:"junaids-portfolio", description:"A bold portfolio for a fashion and technical designer, bringing technical drawings, graphic design and creative work together.", tags:["Portfolio","Responsive design","Motion"], href:"https://syed-junaid-shah.vercel.app/" },
  { number:"07", category:"PERSONAL DIGITAL EXPERIENCE", title:"Eishaverse", slug:"eishaverse", description:"A premium personal universe designed to bring personality, memories and meaningful details into one expressive digital experience.", tags:["Next.js","Creative direction","Interaction"], href:"https://eishaverse.vercel.app/" },
  { number:"08", category:"PROFESSIONAL PORTFOLIO", title:"Eisha's Portfolio", slug:"eishas-portfolio", description:"A professional portfolio direction bringing together digital marketing, social media, mehndi artistry and entrepreneurial work.", tags:["Portfolio","Personal brand","Creative direction"], status:"PREVIEW TO BE ADDED" },
  { number:"09", category:"PERSONAL CREATIVE PROJECT", title:"For Her", slug:"for-her", description:"A personal digital experience created around a thoughtful, individual concept.", tags:["Creative development","Personal project"], status:"PREVIEW TO BE ADDED" },
  { number:"10", category:"EXPERIMENTS & SIDE PROJECTS", title:"My Surge Projects", slug:"my-surge-projects", description:"A collection of experiments, small builds and explorations across web development and digital experiences.", tags:["Experiments","Web development","Learning"], status:"COLLECTION IN PROGRESS" },
];

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
