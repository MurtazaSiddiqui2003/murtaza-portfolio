import { NextResponse } from "next/server";
import { isAdminRequest } from "../../../../lib/admin-auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const OWNER_REPO = "MurtazaSiddiqui2003/murtaza-portfolio";
const BRANCHES = [...new Set([
  process.env.GITHUB_CONTENT_BRANCH,
  process.env.VERCEL_GIT_COMMIT_REF,
  "main",
  "feature/portfolio-admin-cms",
].filter(Boolean))];
const FILE_PATH = "content/projects.json";

function githubHeaders() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error("GITHUB_TOKEN is not configured.");
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
  };
}

async function readProjects() {
  let lastStatus = 404;

  for (const branch of BRANCHES) {
    const response = await fetch(`https://api.github.com/repos/${OWNER_REPO}/contents/${FILE_PATH}?ref=${encodeURIComponent(branch)}`, {
      headers: githubHeaders(),
      cache: "no-store",
    });

    if (response.status === 404) {
      lastStatus = 404;
      continue;
    }
    if (!response.ok) throw new Error(`GitHub read failed (${response.status}) on branch ${branch}.`);

    const file = await response.json();
    return {
      projects: JSON.parse(Buffer.from(file.content, "base64").toString("utf8")),
      sha: file.sha,
      branch,
    };
  }

  throw new Error(`GitHub read failed (${lastStatus}). Checked branches: ${BRANCHES.join(", ")}.`);
}

export async function GET(request) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  try {
    const { projects } = await readProjects();
    return NextResponse.json({ projects });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Could not load projects." }, { status: 500 });
  }
}

export async function PUT(request) {
  if (!isAdminRequest(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });

  try {
    const body = await request.json();
    const projects = body.projects;
    if (!Array.isArray(projects) || projects.length > 100) {
      return NextResponse.json({ error: "Projects must be a list of 100 items or fewer." }, { status: 400 });
    }

    const seenSlugs = new Set();
    for (const project of projects) {
      if (!project || typeof project.title !== "string" || !project.title.trim() ||
          typeof project.slug !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)) {
        return NextResponse.json({ error: "Every project needs a title and a valid lowercase URL slug." }, { status: 400 });
      }
      if (seenSlugs.has(project.slug)) return NextResponse.json({ error: "Project slugs must be unique." }, { status: 400 });
      seenSlugs.add(project.slug);
      if (!Array.isArray(project.tags) || project.tags.some((tag) => typeof tag !== "string")) {
        return NextResponse.json({ error: `Tags for ${project.title} must be a list of text values.` }, { status: 400 });
      }
    }

    const { sha, branch } = await readProjects();
    const response = await fetch(`https://api.github.com/repos/${OWNER_REPO}/contents/${FILE_PATH}`, {
      method: "PUT",
      headers: githubHeaders(),
      body: JSON.stringify({
        message: "Update portfolio projects from admin",
        content: Buffer.from(JSON.stringify(projects, null, 2) + "\n", "utf8").toString("base64"),
        sha,
        branch,
      }),
    });

    if (!response.ok) {
      const details = await response.json().catch(() => ({}));
      throw new Error(details.message || `GitHub publish failed (${response.status}).`);
    }

    const result = await response.json();
    return NextResponse.json({ published: true, commit: result.commit?.html_url || null });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Could not publish projects." }, { status: 500 });
  }
}
