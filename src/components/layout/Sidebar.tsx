"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Building2, LineChart } from "lucide-react";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Companies", href: "/companies", icon: Building2 },
  { label: "Analytics", href: "/analytics", icon: LineChart },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col border-r border-[var(--border-app)] bg-[var(--bg-surface)]">
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors
                ${active
                  ? "bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/25"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}
            >
              <Icon size={16} strokeWidth={1.75} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}