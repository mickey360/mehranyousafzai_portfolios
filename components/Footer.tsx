import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div><span className="footer-mark">M</span><span>© {new Date().getFullYear()} {site.name}</span></div>
        <span>AI/ML · Full-Stack · Building for the web</span>
        <div className="footer-links">
          <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={site.fiverr} target="_blank" rel="noreferrer">Fiverr</a>
        </div>
      </div>
    </footer>
  );
}
