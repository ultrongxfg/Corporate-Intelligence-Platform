import Link from "next/link";
import type { CompanySummary } from "@/types/company";

interface CompanyCardProps {
  company: CompanySummary;
}

export function CompanyCard({ company }: CompanyCardProps) {
  return (
    <Link
      href={`/companies/${company.slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-brand-500/30 hover:shadow-md"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-sm font-bold text-brand-700">
          {company.logoInitials}
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
          {company.industry}
        </span>
      </div>

      <h3 className="mb-1 text-lg font-semibold text-slate-900 group-hover:text-brand-600">
        {company.name}
      </h3>
      <p className="mb-4 text-sm text-slate-500">{company.headquarters}</p>

      <div className="mt-auto grid grid-cols-3 gap-4 border-t border-slate-100 pt-4">
        <div>
          <p className="text-xs text-slate-400">Revenue</p>
          <p className="text-sm font-semibold text-slate-900">{company.revenue}</p>
        </div>
        <div>
          <p className="text-xs text-slate-400">Net Income</p>
          <p className="text-sm font-semibold text-slate-900">{company.netIncome}</p>
        </div>
        <div>
          <p className="text-xs text-slate-400">Employees</p>
          <p className="text-sm font-semibold text-slate-900">
            {company.employees.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
