import Image from "next/image";
import Link from "next/link";
import { Reveal, MagneticButton } from "@/components/Animated";
import ProjectCard from "@/components/ProjectCard";
import Marquee from "@/components/Marquee";
import { projects, site, skills } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <Reveal><div className="eyebrow"><span className="status-dot" /> {site.availability}</div></Reveal>
          <div className="hero-grid">
            <div>
              <Reveal delay={0.08}>
                <div className="kicker">AI / ML × Full-Stack</div>
                <h1 className="hero-title">Building <span className="gradient-text">digital products</span> with code & intelligence.</h1>
                <p className="hero-copy">{site.intro}</p>
                <div className="actions">
                  <MagneticButton href="/projects" primary>Explore my work <span>→</span></MagneticButton>
                  <MagneticButton href="/contact">Let's connect <span>↗</span></MagneticButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.18}>
              <div className="portrait-card">
                <div className="portrait-inner">
                  <Image src="/mehran.png" alt="Mehran Yousafzai" fill priority sizes="(max-width: 850px) 100vw, 420px" />
                  <div className="portrait-overlay"><small>Currently based in</small><strong>{site.location}</strong></div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <Reveal><div className="kicker">Selected work</div><h2 className="section-title">Things I've built.</h2></Reveal>
            <Reveal delay={0.1}><p className="section-lead">A selection of product experiments and web applications from my GitHub. More projects are being built.</p></Reveal>
          </div>
          <div className="work-grid">
            {projects.slice(0, 2).map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}
          </div>
          <Reveal><div style={{ marginTop: 18 }}><Link className="btn secondary" href="/projects">View all projects <span>→</span></Link></div></Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 35 }}>
        <div className="container">
          <div className="about-grid">
            <Reveal><div className="kicker">About</div><h2 className="section-title">Engineer mindset.<br /><span className="gradient-text">Builder energy.</span></h2></Reveal>
            <Reveal delay={0.1}>
              <p className="copy-large">{site.about}</p>
              <p className="muted" style={{ lineHeight: 1.85, marginTop: 22 }}>I'm especially interested in the space where good software meets useful AI — from polished interfaces to the systems behind them.</p>
              <div className="actions" style={{ marginTop: 28 }}><Link className="btn secondary" href="/about">More about me <span>→</span></Link></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 35 }}>
        <div className="container">
          <Reveal><div className="section-head"><div><div className="kicker">Toolkit</div><h2 className="section-title">My stack.</h2></div><p className="section-lead">Technologies I use and continue to deepen as I grow as a developer.</p></div></Reveal>
          <Reveal delay={0.08}><div className="skill-cloud">{skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}</div></Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="contact-card">
              <div className="kicker">Have a project?</div>
              <h2 className="contact-title">Let's make something <span className="gradient-text">worth shipping.</span></h2>
              <p className="section-lead" style={{ marginTop: 28 }}>I'm available for freelance and remote work. If you have an idea, product, website, or AI-powered experience in mind, let's talk.</p>
              <div className="actions" style={{ marginTop: 30 }}><a className="btn primary" href={`mailto:${site.email}`}>Start a conversation <span>↗</span></a><a className="btn secondary" href={site.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
