import Link from "next/link";
import { CompanyCard } from "@/components/companies/CompanyCard";
import { companyService } from "@/lib/services/companyService";

export default function HomePage() {
  const companies = companyService.listCompanies();

  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="container-app py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-600">
              Corporate Intelligence Platform
            </p>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Actionable insights for{" "}
              <span className="text-brand-600">enterprise decisions</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Explore company profiles, financial metrics, and leadership data
              to drive smarter business intelligence across your organization.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/companies"
                className="inline-flex items-center rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
              >
                Browse Companies
              </Link>
              <a
                href="/api/companies"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
              >
                Browse API
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-900">
        <div className="container-app grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
          {[
            { label: "Companies Tracked", value: String(companies.length) },
            {
              label: "Industries Covered",
              value: String(new Set(companies.map((c) => c.industry)).size),
            },
            { label: "Data Points", value: "50+" },
            { label: "API Endpoints", value: "2" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-app">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Featured Companies
              </h2>
              <p className="mt-2 text-slate-600">
                Select a company to view its full intelligence profile.
              </p>
            </div>
            <Link
              href="/companies"
              className="hidden text-sm font-medium text-brand-600 hover:text-brand-700 sm:block"
            >
              View all →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
