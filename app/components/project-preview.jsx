"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export default function ProjectPreview({ title, href }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);
  const address = new URL(href).host;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <div className="showcase-preview">
        <div className="preview-browser-bar">
          <span className="preview-dots" aria-hidden="true"><i /><i /><i /></span>
          <span className="preview-address">{address}</span>
          <a href={href} target="_blank" rel="noreferrer" aria-label={`Open ${title} in a new tab`}>OPEN ↗</a>
        </div>
        <iframe
          className="showcase-iframe"
          src={href}
          title={`${title} live website preview`}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
        />
        <button
          ref={triggerRef}
          className="preview-open-trigger"
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Open full-screen preview of ${title}`}
        >
          <span>EXPAND PREVIEW <b>↗</b></span>
        </button>
      </div>

      {mounted && open && createPortal(
        <div
          className="preview-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false);
          }}
        >
          <section
            className="preview-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} website preview`}
          >
            <header className="preview-modal-toolbar">
              <div className="preview-modal-heading">
                <span className="preview-modal-kicker">LIVE WEBSITE PREVIEW</span>
                <strong>{title}</strong>
                <span className="preview-modal-address">{address}</span>
              </div>
              <div className="preview-modal-actions">
                <a href={href} target="_blank" rel="noreferrer">OPEN IN NEW TAB ↗</a>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="preview-modal-close"
                  onClick={() => setOpen(false)}
                  aria-label="Close full-screen preview"
                >
                  <span aria-hidden="true">×</span>
                  <span className="preview-close-label">CLOSE</span>
                </button>
              </div>
            </header>
            <div className="preview-modal-viewport">
              <iframe
                src={href}
                title={`${title} full-screen website preview`}
                loading="eager"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="fullscreen"
              />
            </div>
          </section>
        </div>,
        document.body
      )}
    </>
  );
}
