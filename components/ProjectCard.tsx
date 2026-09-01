import type { projects } from "@/data/site";
import Link from "next/link";
import type { CSSProperties } from "react";

type Project = (typeof projects)[number];

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <article className="project-card reveal" style={{ "--delay": `${index * 0.08}s` } as CSSProperties}>
      <div className="project-glow" aria-hidden="true" />
      <div className="project-top"><span>{project.number}</span><span>PROJECT</span></div>
      <div className="project-body">
        <p className="project-label">{project.label}</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
      </div>
      <div className="tags">{project.tech.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
      <div className="project-links">
        <a className="icon-btn" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>GH</a>
        {project.demo ? <a className="icon-btn" href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>↗</a> : null}
      </div>
    </article>
  );
}
