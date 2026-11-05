"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Murtaza Siddiqui home">M.</a>
      <button
        className={`menu-toggle ${open ? "is-open" : ""}`}
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <nav id="primary-nav" className={`nav ${open ? "nav-open" : ""}`}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>
          Let&apos;s Talk <span>→</span>
        </a>
      </nav>
    </header>
  );
}
