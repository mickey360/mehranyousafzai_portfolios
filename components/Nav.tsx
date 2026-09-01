"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/data/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Mehran Yousafzai home" onClick={() => setOpen(false)}>M</Link>
        <div className={`nav-links ${open ? "mobile-open" : ""}`}>
          {navItems.map((item) => (
            <Link key={item.href} className={`nav-link ${pathname === item.href ? "active" : ""}`} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
        <a className="nav-cta" href={`mailto:${site.email}`}>Hire me <span aria-hidden="true">↗</span></a>
        <button className="mobile-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}
