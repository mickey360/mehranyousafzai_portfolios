const items = ["Full-Stack Development", "AI / ML", "Next.js", "React", "TypeScript", "Product Building", "Software Engineering"];

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Skills marquee">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <div className="marquee-item" key={`${item}-${i}`}><span>{item}</span><i aria-hidden="true" /></div>
        ))}
      </div>
    </div>
  );
}
