import SiteHeader from "./components/site-header";
import Reveal from "./components/reveal";

const services = [
  {
    number: "01",
    title: "Website development",
    description:
      "Purpose-built websites for businesses that need a clear, credible and responsive online presence.",
  },
  {
    number: "02",
    title: "Redesign & improvements",
    description:
      "Refresh an existing website, improve its layout, fix responsive issues and make the experience work harder.",
  },
  {
    number: "03",
    title: "E-commerce experiences",
    description:
      "Storefront development and practical improvements that help customers browse products and shop with confidence.",
  },
  {
    number: "04",
    title: "Ongoing website support",
    description:
      "Updates, new sections, feature additions and maintenance as your business evolves.",
  },
];

const process = [
  ["01", "Understand", "We talk through your business, goals, audience and what you need the website to do."],
  ["02", "Plan & build", "I shape the structure and build the experience, keeping you involved as it takes form."],
  ["03", "Refine", "We review the details, test across screen sizes and make the agreed adjustments."],
  ["04", "Launch & support", "We get your website live and discuss the support you need after launch."],
];

function SectionKicker({ left, right, light = false }) {
  return (
    <div className={`section-kicker ${light ? "section-kicker-light" : ""}`}>
      <span>{left}</span>
      <span>{right}</span>
    </div>
  );
}

function ProjectLink({ href, children, label }) {
  return (
    <a className="project-visual-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
      <span className="image-open">VIEW LIVE SITE ↗</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero dark-section">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-inner">
            <Reveal delay={0.05}><p className="eyebrow light-eyebrow">
              <span className="status-dot" />
              INDEPENDENT WEB DEVELOPER
              <span className="eyebrow-line" />
              PAKISTAN · WORKING WORLDWIDE
            </p></Reveal>
            <Reveal delay={0.14}><h1>
              Digital experiences
              <br />
              made <em>to move</em>
              <br />
              business forward<span className="period">.</span>
            </h1></Reveal>
            <Reveal delay={0.24}><div className="hero-bottom">
              <p className="hero-copy">
                I build, improve and develop thoughtful websites and e-commerce
                experiences for businesses ready to grow.
              </p>
              <a className="round-link" href="#work">
                <span>Explore<br />my work</span>
                <b>↓</b>
              </a>
            </div></Reveal>
            <div className="hero-meta">
              <span>WEB DEVELOPMENT · E-COMMERCE · DIGITAL EXPERIENCES</span>
              <span>SCROLL TO EXPLORE ↓</span>
            </div>
          </div>
        </section>

        <section className="intro section-pad">
          <SectionKicker left="01 / A PRACTICAL CREATIVE PARTNER" right="INDEPENDENT BY DESIGN" />
          <div className="intro-grid">
            <h2>Good websites do<br />more than <em>look good.</em></h2>
            <div className="intro-text">
              <p>
                They make a business easier to understand, easier to trust and
                easier to choose. I bring design thinking and hands-on development
                together to create digital experiences with a clear purpose.
              </p>
              <a className="text-link" href="#about">A little about me <span>↗</span></a>
            </div>
          </div>
        </section>

        <section className="work-section section-pad" id="work">
          <SectionKicker left="02 / SELECTED WORK" right="REAL PROJECTS, PRACTICAL SOLUTIONS" />
          <div className="section-heading">
            <h2>Selected <em>work.</em></h2>
            <p>
              A look at projects where I&apos;ve helped shape the digital
              experience, from the first impression to the details behind the scenes.
            </p>
          </div>

          <Reveal><article className="project project-featured">
            <ProjectLink href="https://sterlingbloom.vercel.app/" label="Visit Sterling Bloom website">
              <div className="browser-frame">
                <div className="browser-bar"><i /><i /><i /><span>sterlingbloom.vercel.app</span></div>
                <div className="mock-site sterling-mock">
                  <span className="mock-brand">STERLING BLOOM</span>
                  <div className="mock-center">
                    <small>EVENT DESIGN & DECOR</small>
                    <strong>Making moments<br />unforgettable.</strong>
                    <span className="mock-button">DISCOVER OUR WORK</span>
                  </div>
                </div>
              </div>
            </ProjectLink>
            <div className="project-info">
              <div>
                <p className="project-index">01 — CLIENT WEBSITE</p>
                <h3>Sterling Bloom</h3>
                <p className="project-desc">
                  A refined digital home for an event design and decor business,
                  with custom site functionality and an administrative experience.
                </p>
                <div className="tags"><span>Website development</span><span>Responsive design</span><span>Admin features</span></div>
              </div>
              <a className="arrow-link" href="https://sterlingbloom.vercel.app/" target="_blank" rel="noreferrer" aria-label="Open Sterling Bloom">↗</a>
            </div>
          </article></Reveal>

          <Reveal delay={0.08}><article className="project project-secondary">
            <ProjectLink href="https://thecrccore.vercel.app/" label="Visit CRC Core website">
              <div className="crc-art">
                <div className="crc-symbol">CRC<span>.</span></div>
                <div className="crc-lines"><b>Built for<br />what&apos;s next.</b><i /><i /><i /></div>
                <span className="crc-label">BUSINESS WEBSITE / DIGITAL PRESENCE</span>
              </div>
            </ProjectLink>
            <div className="project-info">
              <div>
                <p className="project-index">02 — BUSINESS WEBSITE</p>
                <h3>CRC Core</h3>
                <p className="project-desc">
                  A focused business website designed to give the brand a clear,
                  professional online presence, supported by custom functionality.
                </p>
                <div className="tags"><span>Web development</span><span>Content structure</span><span>Admin functionality</span></div>
              </div>
              <a className="arrow-link" href="https://thecrccore.vercel.app/" target="_blank" rel="noreferrer" aria-label="Open CRC Core">↗</a>
            </div>
          </article></Reveal>
          <p className="work-note">
            Project visuals are illustrative previews for this first build.
            We&apos;ll replace them with approved screenshots of the live work before launch.
          </p>
        </section>

        <section className="services-section dark-section section-pad" id="services">
          <SectionKicker left="03 / WHAT I CAN HELP WITH" right="THOUGHTFUL FROM START TO FINISH" light />
          <div className="section-heading light-heading">
            <h2>Ways we can<br /><em>work together.</em></h2>
            <p>
              Whether you&apos;re starting from zero or improving what you already
              have, I can help turn the next step into something tangible.
            </p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <Reveal key={service.number}><article className="service-row">
                <span className="service-no">{service.number}</span>
                <div><h3>{service.title}</h3><p>{service.description}</p></div>
                <span className="service-arrow">↗</span>
              </article></Reveal>
            ))}
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <SectionKicker left="04 / A LITTLE ABOUT ME" right="CURIOUS, HANDS-ON, ALWAYS LEARNING" />
          <div className="about-grid">
            <div className="about-mark">M<span>.</span></div>
            <div className="about-copy">
              <h2>Hey, I&apos;m Murtaza.<br />I make the web work<br /><em>for real businesses.</em></h2>
              <p>
                I&apos;m an independent web developer interested in the space where
                thoughtful design meets practical technology. I enjoy taking a
                project from a rough idea to a working website—and helping existing
                websites become clearer, more useful and easier to manage.
              </p>
              <p>
                I value honest communication, useful details and solutions that
                make sense for the people who will use them. I&apos;m continually
                learning, experimenting and finding better ways to deliver.
              </p>
              <a className="text-link" href="https://github.com/MurtazaSiddiqui2003" target="_blank" rel="noreferrer">
                Find me on GitHub <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="process-section section-pad">
          <SectionKicker left="05 / THE PROCESS" right="NO MYSTERY, JUST GOOD COLLABORATION" />
          <div className="section-heading">
            <h2>Simple steps.<br /><em>Solid work.</em></h2>
            <p>A straightforward process keeps the project focused and makes sure we&apos;re solving the right problem.</p>
          </div>
          <div className="process-grid">
            {process.map(([number, title, description]) => (
              <Reveal key={number}><article>
                <span>{number}</span><h3>{title}</h3><p>{description}</p>
              </article></Reveal>
            ))}
          </div>
        </section>

        <section className="contact-section dark-section section-pad" id="contact">
          <SectionKicker left="06 / HAVE A PROJECT IN MIND?" right="LET'S MAKE IT HAPPEN" light />
          <Reveal className="contact-main">
            <p className="eyebrow light-eyebrow">GOOD WORK STARTS WITH A CONVERSATION</p>
            <h2>Let&apos;s build<br />something <em>that matters.</em></h2>
            <p className="contact-copy">
              Have a new website in mind, an online store to improve, or an
              existing site that needs attention? Tell me a little about it.
            </p>
            <a className="contact-button" href="https://github.com/MurtazaSiddiqui2003" target="_blank" rel="noreferrer">
              Connect with me on GitHub <span>↗</span>
            </a>
          </Reveal>
          <div className="contact-bottom">
            <span>OPEN TO FREELANCE PROJECTS</span>
            <span>PAKISTAN · AVAILABLE REMOTELY</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="wordmark" href="#top">MS<span>.</span></a>
        <span>© {new Date().getFullYear()} MURTAZA SIDDIQUI</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
