import type { Metadata } from "next";
import { CompanyCard } from "@/components/companies/CompanyCard";
import { companyService } from "@/lib/services/companyService";

export const metadata: Metadata = {
  title: "Companies",
  description: "Browse all tracked companies in the Corporate Intelligence Platform.",
};

export default function CompaniesPage() {
  const companies = companyService.listCompanies();

  return (
    <div className="py-10">
      <div className="container-app">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Companies</h1>
          <p className="mt-2 text-slate-600">
            {companies.length} companies tracked across{" "}
            {new Set(companies.map((c) => c.industry)).size} industries.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
}
