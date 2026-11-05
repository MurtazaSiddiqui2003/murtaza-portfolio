import SiteHeader from "./components/site-header";
import Reveal from "./components/reveal";

const projects = [
  {
    number: "01",
    name: "Sterling Bloom",
    category: "Luxury Event Decor",
    description: "A refined digital experience for an event design and decor brand, with custom booking flows and a tailored admin experience.",
    href: "https://sterlingbloom.vercel.app/",
    visual: "sterling",
  },
  {
    number: "02",
    name: "Eisha's Beauty",
    category: "Beauty & Skincare",
    description: "A beauty brand direction built around a soft, elegant visual identity and a considered online shopping experience.",
    href: "https://eishas.vercel.app/",
    visual: "beauty",
  },
  {
    number: "03",
    name: "CRC Core",
    category: "Business Solutions",
    description: "A focused business website that gives the brand a clear, confident digital presence and room to grow.",
    href: "https://thecrccore.vercel.app/",
    visual: "crc",
  },
];

const services = [
  ["⌘", "Web Development", "(Next.js & More)"],
  ["◉", "UI/UX Design", "(Modern & Minimal)"],
  ["↗", "Digital Marketing", "(Growth Strategies)"],
  ["⚙", "Custom Solutions", "(Your Ideas, My Code)"],
];

const steps = [
  ["1", "Understand", "We discuss your vision and needs."],
  ["2", "Plan & Design", "I create a strategy and design that fits your goals."],
  ["3", "Develop & Deliver", "I build, test and deliver with quality and care."],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="hero" id="home">
          <div className="hero-glow" />
          <div className="hero-orbit" />
          <div className="hero-inner">
            <div className="hero-copy-wrap">
              <Reveal><p className="availability"><i /> Freelance Web Developer</p></Reveal>
              <Reveal delay={0.08}>
                <h1>Crafting Digital<br />Experiences That<br />Drive <em>Growth.</em></h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="hero-description">
                  I'm Murtaza Siddiqui — a developer, designer, and problem-solver.
                  I help brands build modern websites, powerful web applications,
                  and scalable digital solutions.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="hero-actions">
                  <a className="button button-filled" href="#work">View My Work <span>→</span></a>
                  <a className="button button-text" href="#contact">Get in Touch</a>
                </div>
              </Reveal>
            </div>
            <div className="hero-person" aria-label="Portrait of Murtaza">
              <div className="portrait-halo" />
              <img src="/images/hero.jpg" alt="Murtaza Siddiqui" />
            </div>
            <div className="hero-socials">
              <a href="https://github.com/MurtazaSiddiqui2003" target="_blank" rel="noreferrer" aria-label="GitHub">⌘</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">𝕏</a>
            </div>
          </div>
          <div className="trusted">
            <div className="trusted-heading"><span />TRUSTED BY INNOVATIVE BRANDS<span /></div>
            <div className="trusted-brands">
              <span className="brand-sterling">Sterling Bloom</span>
              <span className="brand-crc">◉ CRC Core</span>
              <span className="brand-eisha">Eisha's</span>
              <span className="brand-feather">FeatherheadBaby</span>
              <span className="brand-naeem">Naeem Impex</span>
              <span className="brand-ksl">♛<small>KSL</small></span>
            </div>
          </div>
        </section>

        <section className="work-section section-shell" id="work">
          <div className="work-intro">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Projects<br />I've Worked On</h2>
            <p>A showcase of my recent work — from e-commerce brands to business websites and digital platforms.</p>
            <a className="button button-filled button-small" href="#contact">Explore All Projects <span>→</span></a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <Reveal key={project.number}>
                <article className="project-card">
                  <a className={`project-image ${project.visual}`} href={project.href} target="_blank" rel="noreferrer" aria-label={`Preview ${project.name}`}>
                    <span className="preview-mark">↗</span>
                    {project.visual === "sterling" && <div className="sterling-preview"><small>STERLING BLOOM</small><strong>Making moments<br />unforgettable.</strong><i>EVENT DESIGN & DECOR</i></div>}
                    {project.visual === "beauty" && <div className="beauty-preview"><span>eisha's</span><b>BEAUTY</b><i>THE ART OF EVERYDAY BEAUTY</i></div>}
                    {project.visual === "crc" && <div className="crc-preview"><small>CRC CORE</small><strong>Built for<br /><em>what's next.</em></strong><i>BUSINESS SOLUTIONS</i></div>}
                  </a>
                  <div className="project-card-info">
                    <h3>{project.name}</h3>
                    <p><i />{project.category}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="services-panel section-shell" id="services">
          <div className="services-intro">
            <p className="eyebrow">MY SERVICES</p>
            <h2>What I<br />Offer</h2>
            <p>From concept to completion, I provide end-to-end digital solutions tailored to your needs.</p>
          </div>
          <div className="services-items">
            {services.map(([icon, title, detail]) => (
              <div className="service-item" key={title}>
                <span className="service-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-process section-shell">
          <div className="about-block" id="about">
            <div className="about-art">
              <div className="about-art-glow" />
              <div className="desk-scene">
                <span className="desk-plant">✦</span>
                <div className="desk-screen"><b>M.</b><i>BUILDING DIGITAL<br />EXPERIENCES</i></div>
                <span className="desk-camera">◉</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="eyebrow">ABOUT ME</p>
              <h2>A Bit About<br />Myself</h2>
              <p>I'm a passionate developer who loves turning ideas into reality. When I'm not coding, I'm exploring new technologies, learning, and creating.</p>
              <a className="button button-outline" href="https://github.com/MurtazaSiddiqui2003" target="_blank" rel="noreferrer">Learn More About Me <span>→</span></a>
            </div>
          </div>
          <div className="process-block" id="process">
            <div className="process-copy">
              <p className="eyebrow">MY PROCESS</p>
              <h2>How I<br />Work</h2>
              <p>A simple, effective process to turn your ideas into results.</p>
              <a className="button button-outline" href="#contact">See The Process <span>→</span></a>
            </div>
            <div className="process-steps">
              {steps.map(([number, title, description]) => (
                <div className="process-step" key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials section-shell" id="testimonials">
          <div className="testimonial-heading">
            <p className="eyebrow">KIND WORDS</p>
            <h2>What Clients<br />Say</h2>
          </div>
          <div className="testimonial-content">
            <span className="quote-mark">“</span>
            <div>
              <blockquote>“Murtaza delivered an outstanding website for our brand. Professional, creative, and a pleasure to work with!”</blockquote>
              <div className="testimonial-author"><span className="author-avatar">E</span><div><strong>Eisha Khan</strong><small>Founder, Eisha's Collection</small></div></div>
            </div>
            <div className="testimonial-dots"><i className="active" /><i /><i /></div>
          </div>
        </section>

        <section className="final-cta section-shell" id="contact">
          <div className="cta-orbit" />
          <h2>Let’s Build Something<br />Great <em>Together.</em></h2>
          <p>Have a project in mind? Let’s talk about it.</p>
          <a className="button button-filled" href="mailto:hello@murtazasiddiqui.com">Get In Touch <span>→</span></a>
        </section>
      </main>
      <footer className="footer section-shell">
        <a className="footer-monogram" href="#top">M.</a>
        <span>© {new Date().getFullYear()} Murtaza Siddiqui. All rights reserved.</span>
        <nav><a href="#contact">Privacy Policy</a><a href="#contact">Terms of Service</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://github.com/MurtazaSiddiqui2003" target="_blank" rel="noreferrer">GitHub</a><a href="https://x.com/" target="_blank" rel="noreferrer">X</a></nav>
      </footer>
    </>
  );
}
