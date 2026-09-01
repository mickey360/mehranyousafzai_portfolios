"use client";

import type { CSSProperties, ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <div className={`reveal ${className}`} style={{ "--delay": `${delay}s` } as CSSProperties}>{children}</div>;
}

export function MagneticButton({ children, href, primary = false }: { children: ReactNode; href: string; primary?: boolean }) {
  return <a href={href} className={`btn ${primary ? "primary" : "secondary"}`}>{children}</a>;
}
