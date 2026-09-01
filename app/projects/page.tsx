import { Reveal } from "@/components/Animated";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/site";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return <>
    <section className="page-top"><div className="container"><Reveal><div className="kicker">Selected work</div></Reveal><Reveal delay={.08}><h1 className="page-title">Projects that turn <span className="gradient-text">ideas into software.</span></h1><p className="page-intro">A growing collection of applications, experiments, and product ideas. Every project is part of the process of becoming a better engineer.</p></Reveal></div></section>
    <section className="section" style={{ paddingTop: 20 }}><div className="container"><div className="work-grid">{projects.map((project,i)=><ProjectCard key={project.title} project={project} index={i}/>)}</div></div></section>
  </>;
}

