import { Reveal } from "@/components/Animated";
import { site } from "@/data/site";

export const metadata = { title: "Contact" };

const contacts = [
  ["Email", site.email, `mailto:${site.email}`],
  ["LinkedIn", "Connect with me", site.linkedin],
  ["Fiverr", "Hire me for freelance work", site.fiverr],
  ["GitHub", "github.com/mickey360", site.github],
];

export default function ContactPage() {
  return <section className="contact-shell">
    <div className="container"><Reveal>
      <div className="contact-card">
        <div className="kicker">Let's connect</div><h1 className="contact-title">Have an idea?<br /><span className="gradient-text">Let's build it.</span></h1><p className="page-intro">I'm available to hire for freelance and remote work. Tell me what you're building and let's see how I can help.</p><div className="contact-grid"><div className="contact-list">{contacts.map(([label,value,href])=><a className="contact-item" key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer"><span className="contact-icon">{label.slice(0,1)}</span><span><small>{label}</small><strong>{value}</strong></span><span className="contact-arrow">↗</span></a>)}</div><div><div className="info-card">
          <div className="info-icon">⌖</div><span>Based in</span><p>{site.location}</p></div></div></div></div></Reveal></div></section>;
}
