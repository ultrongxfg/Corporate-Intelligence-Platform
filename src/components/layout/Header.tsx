import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/companies", label: "Companies" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-app)] bg-[var(--bg-surface)]/80 backdrop-blur-md">
      <div className="container-app flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent)] text-sm font-bold text-[var(--bg-page)]">
            CI
          </div>
          <span className="text-lg font-semibold text-[var(--text-primary)]">
            Corporate Intelligence
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}