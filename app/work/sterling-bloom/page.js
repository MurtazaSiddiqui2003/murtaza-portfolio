import SiteHeader from "../../components/site-header";
import Reveal from "../../components/reveal";
import ProjectPreview from "../../components/project-preview";

export const metadata = {
  title: "Sterling Bloom — Case Study | Murtaza Siddiqui",
  description:
    "A closer look at the website design and development work for Sterling Bloom, an event design and decor business.",
};

const details = [
  ["CLIENT", "Sterling Bloom"],
  ["INDUSTRY", "Event design & decor"],
  ["MY ROLE", "Website design & development"],
  ["PLATFORM", "Next.js"],
];

const capabilities = [
  {
    number: "01",
    title: "A considered digital first impression",
    description:
      "A restrained, editorial visual direction gives the brand room to communicate its work with clarity while keeping the experience polished and welcoming.",
  },
  {
    number: "02",
    title: "Responsive, purpose-built pages",
    description:
      "The website is structured to present the business clearly across desktop and mobile, with considered layouts, typography and navigation.",
  },
  {
    number: "03",
    title: "A practical content experience",
    description:
      "Alongside the public-facing website, I built a custom admin experience so key website content and presentation can be managed without treating every update as a code change.",
  },
  {
    number: "04",
    title: "A clearer path to enquiry",
    description:
      "The experience brings business information and contact actions into a more direct journey, helping interested visitors take the next step.",
  },
];

export default function SterlingBloomCaseStudy() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="case-study-page">
        <section className="case-hero dark-section">
          <div className="case-hero-inner">
            <p className="eyebrow light-eyebrow">
              <span className="status-dot" />
              CASE STUDY / 001
              <span className="eyebrow-line" />
              CLIENT WEBSITE
            </p>
            <Reveal>
              <h1>
                Sterling
                <br />
                <em>Bloom.</em>
              </h1>
            </Reveal>
            <div className="case-hero-bottom">
              <p>
                Creating a refined digital home for an event design and decor
                business — with a considered public experience and a practical
                way to manage the website behind the scenes.
              </p>
              <a className="case-live-link" href="https://sterlingbloom.vercel.app/" target="_blank" rel="noreferrer">
                VISIT LIVE WEBSITE <span>↗</span>
              </a>
            </div>
            <div className="case-details">
              {details.map(([label, value]) => (
                <div key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="case-preview-section section-pad">
          <div className="case-section-heading">
            <span className="case-kicker">01 / THE LIVE EXPERIENCE</span>
            <p>Explore the website directly below. Scroll and interact with the embedded preview, or expand it when you want a closer look.</p>
          </div>
          <ProjectPreview title="Sterling Bloom" href="https://sterlingbloom.vercel.app/" />
        </section>

        <section className="case-overview section-pad">
          <div className="case-overview-label">
            <span className="case-kicker">02 / THE BRIEF</span>
            <span>FROM BUSINESS NEED TO DIGITAL EXPERIENCE</span>
          </div>
          <div className="case-overview-content">
            <h2>A digital presence that feels as considered as the work <em>it represents.</em></h2>
            <div>
              <p>
                Sterling Bloom needed a website that could introduce its event
                design and decor services with confidence, communicate a
                distinctive brand feel and make it easier for potential clients
                to get in touch.
              </p>
              <p>
                The goal was not simply to put information online. It was to
                create a cohesive experience that balances visual presentation
                with the practical needs of running and updating a business
                website.
              </p>
            </div>
          </div>
        </section>

        <section className="case-build-section dark-section section-pad">
          <div className="case-section-heading case-section-heading-light">
            <span className="case-kicker">03 / WHAT I BUILT</span>
            <p>Design decisions and development work brought together around one clear business purpose.</p>
          </div>
          <div className="case-capability-list">
            {capabilities.map((item) => (
              <Reveal key={item.number}>
                <article className="case-capability">
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="case-outcome section-pad">
          <span className="case-kicker">04 / THE OUTCOME</span>
          <div className="case-outcome-grid">
            <h2>A working website.<br /><em>A more manageable presence.</em></h2>
            <div>
              <p>
                Sterling Bloom now has a live website built around its brand,
                services and enquiry journey, supported by a custom content
                management experience.
              </p>
              <p className="case-honesty-note">
                I don’t publish traffic, lead or conversion figures for this
                project, so I’m keeping the case study focused on the work
                delivered rather than claiming unverified business results.
              </p>
              <a className="text-link" href="https://sterlingbloom.vercel.app/" target="_blank" rel="noreferrer">
                Explore Sterling Bloom <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="case-next dark-section section-pad">
          <span className="case-kicker">HAVE A PROJECT IN MIND?</span>
          <h2>Let’s build something<br /><em>that works beautifully.</em></h2>
          <a className="case-live-link" href="/#contact">START A CONVERSATION <span>↗</span></a>
          <a className="case-back-link" href="/work">← BACK TO THE WORK ARCHIVE</a>
        </section>
      </main>
      <footer className="footer">
        <a className="wordmark" href="/#top" aria-label="Murtaza Siddiqui home">
          <img className="brand-logo footer-logo" src="/images/logo.jpg" alt="Murtaza Siddiqui logo" />
        </a>
        <span>© {new Date().getFullYear()} MURTAZA SIDDIQUI</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
