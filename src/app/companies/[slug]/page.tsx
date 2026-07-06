import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MetricCard } from "@/components/companies/MetricCard";
import { companyService } from "@/lib/services/companyService";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
 const company = await companyService.getCompanyBySlug(slug);

  if (!company) {
    return { title: "Company Not Found" };
  }

  return {
    title: company.name,
    description: company.description,
  };
}

export default async function CompanyProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const company = await companyService.getCompanyBySlug(slug);

  if (!company) {
    notFound();
  }

  const { financials } = company;

  return (
    <div className="py-10">
      <div className="container-app">
        <nav className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/companies" className="hover:text-brand-600">
            Companies
          </Link>
          <span>/</span>
          <span className="text-slate-900">{company.name}</span>
        </nav>

        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-2xl font-bold text-brand-700">
            {company.logoInitials}
          </div>
          <div className="flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold text-slate-900">
                {company.name}
              </h1>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                {company.industry}
              </span>
            </div>
            <p className="mb-3 text-lg text-slate-600">{company.tagline}</p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              <span>{company.headquarters}</span>
              <span>·</span>
              <span>Founded {financials.founded}</span>
              <span>·</span>
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-600 hover:underline"
              >
                {company.website.replace("https://", "")}
              </a>
            </div>
          </div>
        </div>

       <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
  {company.livePrice !== undefined && (
    <MetricCard
      label="Live Price"
      value={`$${company.livePrice.toFixed(2)}`}
      trend={
        (company.changePercent ?? 0) >= 0 ? "up" : "down"
      }
      subtext={
        company.changePercent !== undefined
          ? `${company.changePercent >= 0 ? "+" : ""}${company.changePercent}%`
          : undefined
      }
    />
  )}
  <MetricCard label="Revenue" value={financials.revenue} trend="up" />
  <MetricCard label="Net Income" value={financials.netIncome} trend="up" />
  <MetricCard
    label="Employees"
    value={financials.employees.toLocaleString()}
    trend="up"
  />
  <MetricCard label="Industry" value={company.industry} trend="neutral" />
</div> 

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <section className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">
                About
              </h2>
              <p className="leading-relaxed text-slate-600">
                {company.description}
              </p>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">
                Key Metrics
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {company.keyMetrics.map((metric) => (
                  <MetricCard
                    key={metric.label}
                    label={metric.label}
                    value={metric.value}
                    trend={metric.trend}
                  />
                ))}
              </div>
            </section>
          </div>

          <div>
            <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-900">
                Leadership
              </h2>
              <ul className="divide-y divide-slate-100">
                {company.executives.map((exec) => (
                  <li key={exec.name} className="flex items-center gap-3 py-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                      {exec.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        {exec.name}
                      </p>
                      <p className="text-xs text-slate-500">{exec.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5">
              <p className="mb-2 text-sm font-medium text-slate-700">
                Raw data via API
              </p>
              <a
                href={`/api/companies/${company.id}`}
                className="break-all text-sm text-brand-600 hover:underline"
              >
                /api/companies/{company.id}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
