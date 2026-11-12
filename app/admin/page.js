"use client";

import { useEffect, useMemo, useState } from "react";

const blankProject = () => ({
  number: "NEW",
  featured: false,
  type: "PROJECT",
  category: "PROJECT",
  title: "New project",
  slug: `new-project-${Date.now().toString().slice(-6)}`,
  description: "",
  tags: [],
  href: "",
  status: "IN PROGRESS",
});

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [dirty, setDirty] = useState(false);

  const featuredCount = useMemo(() => projects.filter((project) => project.featured).length, [projects]);

  async function loadProjects() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/admin/projects", { cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to load projects.");
      setProjects(data.projects);
      setDirty(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetch("/api/admin/session", { cache: "no-store" })
      .then((response) => response.json())
      .then(async (data) => {
        if (data.authenticated) {
          setAuthenticated(true);
          await loadProjects();
        }
      })
      .catch(() => setError("Could not verify your admin session."))
      .finally(() => setChecking(false));
  }, []);

  async function login(event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Login failed.");
      setAuthenticated(true);
      setPassword("");
      await loadProjects();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    await fetch("/api/admin/session", { method: "DELETE" });
    setAuthenticated(false);
    setProjects([]);
    setDirty(false);
  }

  function updateProject(index, key, value) {
    setProjects((current) => current.map((project, i) => {
      if (i !== index) return project;
      const next = { ...project, [key]: value };
      if (key === "type") next.category = value;
      if (key === "category") next.type = value;
      return next;
    }));
    setDirty(true);
    setNotice("");
  }

  function moveProject(index, direction) {
    const target = index + direction;
    if (target < 0 || target >= projects.length) return;
    setProjects((current) => {
      const next = [...current];
      [next[index], next[target]] = [next[target], next[index]];
      return next.map((project, i) => ({ ...project, number: String(i + 1).padStart(2, "0") }));
    });
    setDirty(true);
    setNotice("");
  }

  function addProject() {
    setProjects((current) => [...current, { ...blankProject(), number: String(current.length + 1).padStart(2, "0") }]);
    setDirty(true);
    setNotice("");
  }

  function removeProject(index) {
    const project = projects[index];
    if (!window.confirm(`Remove "${project.title}" from your portfolio?`)) return;
    setProjects((current) => current.filter((_, i) => i !== index).map((item, i) => ({ ...item, number: String(i + 1).padStart(2, "0") })));
    setDirty(true);
    setNotice("");
  }

  async function publish() {
    if (!dirty || publishing) return;
    if (featuredCount > 4) {
      setError("Keep the homepage to four featured projects or fewer.");
      return;
    }
    if (!window.confirm("Publish these project changes to your live portfolio? This creates a GitHub commit and starts a Vercel deployment.")) return;

    setPublishing(true);
    setError("");
    setNotice("");
    try {
      const response = await fetch("/api/admin/projects", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projects }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Publish failed.");
      setDirty(false);
      setNotice("Published to GitHub. Vercel will now build and deploy your updated portfolio.");
    } catch (err) {
      setError(err.message);
    } finally {
      setPublishing(false);
    }
  }

  if (checking) return <main className="admin-shell"><p className="admin-muted">Checking secure session…</p></main>;

  if (!authenticated) {
    return (
      <main className="admin-shell admin-login-shell">
        <a className="admin-back" href="/">← BACK TO PORTFOLIO</a>
        <div className="admin-login-card">
          <span className="admin-kicker">PRIVATE WORKSPACE / 01</span>
          <h1>Welcome <em>back.</em></h1>
          <p>Sign in to manage the projects shown across your portfolio.</p>
          <form onSubmit={login}>
            <label htmlFor="admin-password">ADMIN PASSWORD</label>
            <input id="admin-password" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required />
            <button className="admin-primary-button" type="submit" disabled={loading}>{loading ? "SIGNING IN…" : "SIGN IN ↗"}</button>
          </form>
          {error && <p className="admin-error">{error}</p>}
          <span className="admin-footnote">PRIVATE ACCESS · NO PUBLIC REGISTRATION</span>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <header className="admin-topbar">
        <a className="admin-back" href="/">← VIEW PORTFOLIO</a>
        <button className="admin-quiet-button" onClick={logout}>SIGN OUT</button>
      </header>

      <section className="admin-heading">
        <span className="admin-kicker">PRIVATE WORKSPACE / CONTENT</span>
        <h1>Project <em>manager.</em></h1>
        <p>Add projects, update links and descriptions, choose what appears on the homepage, and arrange the order of your work archive.</p>
      </section>

      <section className="admin-toolbar">
        <div><strong>{projects.length.toString().padStart(2, "0")}</strong><span>PROJECTS</span></div>
        <div><strong>{featuredCount.toString().padStart(2, "0")}</strong><span>FEATURED ON HOME</span></div>
        <div className="admin-toolbar-actions">
          <button className="admin-quiet-button" onClick={addProject}>+ ADD PROJECT</button>
          <button className="admin-primary-button" onClick={publish} disabled={!dirty || publishing}>{publishing ? "PUBLISHING…" : "PUBLISH CHANGES ↗"}</button>
        </div>
      </section>

      {error && <p className="admin-alert admin-alert-error">{error}</p>}
      {notice && <p className="admin-alert admin-alert-success">{notice}</p>}
      {dirty && <p className="admin-draft-note">UNPUBLISHED CHANGES · These edits are a draft until you publish them.</p>}

      {loading ? <p className="admin-muted">Loading your projects…</p> : (
        <section className="admin-project-list">
          {projects.map((project, index) => (
            <article className="admin-project-card" key={project.slug + index}>
              <div className="admin-project-topline">
                <span>{String(index + 1).padStart(2, "0")} / PROJECT</span>
                <div className="admin-reorder">
                  <button onClick={() => moveProject(index, -1)} disabled={index === 0} aria-label="Move project up">↑</button>
                  <button onClick={() => moveProject(index, 1)} disabled={index === projects.length - 1} aria-label="Move project down">↓</button>
                  <button className="admin-delete" onClick={() => removeProject(index)}>REMOVE</button>
                </div>
              </div>

              <div className="admin-fields-grid">
                <div className="admin-field admin-field-wide">
                  <label>PROJECT TITLE</label>
                  <input value={project.title || ""} onChange={(event) => updateProject(index, "title", event.target.value)} />
                </div>
                <div className="admin-field">
                  <label>URL SLUG</label>
                  <input value={project.slug || ""} onChange={(event) => updateProject(index, "slug", event.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))} />
                </div>
                <div className="admin-field">
                  <label>CATEGORY</label>
                  <input value={project.category || project.type || ""} onChange={(event) => updateProject(index, "category", event.target.value)} />
                </div>
                <div className="admin-field admin-field-wide">
                  <label>DESCRIPTION</label>
                  <textarea rows="3" value={project.description || ""} onChange={(event) => updateProject(index, "description", event.target.value)} />
                </div>
                <div className="admin-field admin-field-wide">
                  <label>LIVE WEBSITE URL (OPTIONAL)</label>
                  <input value={project.href || ""} placeholder="https://example.com" onChange={(event) => updateProject(index, "href", event.target.value)} />
                </div>
                <div className="admin-field admin-field-wide">
                  <label>TAGS (SEPARATE WITH COMMAS)</label>
                  <input value={(project.tags || []).join(", ")} onChange={(event) => updateProject(index, "tags", event.target.value.split(",").map((tag) => tag.trim()).filter(Boolean))} />
                </div>
                <div className="admin-field">
                  <label>STATUS</label>
                  <input value={project.status || ""} placeholder="LIVE PROJECT" onChange={(event) => updateProject(index, "status", event.target.value)} />
                </div>
                <label className="admin-feature-toggle">
                  <input type="checkbox" checked={Boolean(project.featured)} onChange={(event) => updateProject(index, "featured", event.target.checked)} />
                  <span>FEATURE ON HOMEPAGE</span>
                </label>
              </div>
            </article>
          ))}
        </section>
      )}

      <footer className="admin-bottom-bar">
        <span>CHANGES ARE ONLY LIVE AFTER PUBLISHING</span>
        <button className="admin-primary-button" onClick={publish} disabled={!dirty || publishing}>{publishing ? "PUBLISHING…" : "PUBLISH CHANGES ↗"}</button>
      </footer>
    </main>
  );
}
