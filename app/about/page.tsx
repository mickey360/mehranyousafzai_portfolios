import { Reveal } from "@/components/Animated";
import { site, skills } from "@/data/site";

export const metadata = { title: "About" };

const cards = [
  ["01", "Education", site.education],
  ["02", "Core craft", "Full-stack web development with modern JavaScript and TypeScript."],
  ["03", "AI / ML", "Exploring machine learning and intelligent application development."],
  ["04", "Direction", "Building products, learning deeply, and turning ideas into software."],
];

export default function AboutPage() {
  return <>
    <section className="page-top"><div className="container"><Reveal><div className="kicker">About me</div></Reveal><Reveal delay={.08}><h1 className="page-title">Software, <span className="gradient-text">AI</span> & building things.</h1><p className="page-intro">{site.about}</p></Reveal></div></section>
    <section className="section" style={{ paddingTop: 30 }}><div className="container"><div className="about-grid"><Reveal><div className="kicker">My approach</div><h2 className="section-title">Learn it.<br />Build it.<br /><span className="gradient-text">Ship it.</span></h2></Reveal><Reveal delay={.1}><p className="copy-large">I care about understanding how things work, not just making them look right.</p><p className="muted" style={{ lineHeight: 1.85, marginTop: 24 }}>My current path combines a Computer Science education with hands-on product development. I use full-stack development as my foundation while moving deeper into AI/ML and intelligent software.</p><p className="muted" style={{ lineHeight: 1.85, marginTop: 18 }}>Long term, I want to build technology products that solve real problems — and develop the engineering depth to take an idea from concept to a reliable product.</p></Reveal></div></div></section>
    <section className="section" style={{ paddingTop: 20 }}><div className="container"><div className="info-grid">{cards.map(([number,title,text],i)=><Reveal key={title} delay={i*.06}><div className="info-card"><div className="info-icon">{number}</div><span>{title}</span><p>{text}</p></div></Reveal>)}</div></div></section>
    <section className="section" style={{ paddingTop: 40 }}><div className="container"><Reveal><div className="kicker">Technology</div><h2 className="section-title">What I work with.</h2></Reveal><Reveal delay={.08}><div className="skill-cloud">{skills.map(skill=><span className="skill" key={skill}>{skill}</span>)}</div></Reveal></div></section>
    <section className="section"><div className="container"><Reveal><div className="contact-card"><div className="kicker">Current focus</div><h2 className="section-title" style={{ maxWidth: 850, marginTop: 14 }}>Becoming a stronger <span className="gradient-text">software engineer</span> while going deeper into AI/ML.</h2></div></Reveal></div></section>
  </>;
}
