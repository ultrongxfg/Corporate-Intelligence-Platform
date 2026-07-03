import { db } from "@/lib/db";
import type { Company, CompanySummary } from "@/types/company";

function toSummary(company: Company): CompanySummary {
  return {
    id: company.id,
    slug: company.slug,
    name: company.name,
    industry: company.industry,
    headquarters: company.headquarters,
    logoInitials: company.logoInitials,
    revenue: company.financials.revenue,
    netIncome: company.financials.netIncome,
    employees: company.financials.employees,
  };
}

export const companyRepository = {
  findAll(): Company[] {
    return db.findAllCompanies();
  },

  findAllSummaries(): CompanySummary[] {
    return this.findAll().map(toSummary);
  },

  findById(id: string): Company | undefined {
    return db.findCompanyById(id);
  },

  findBySlug(slug: string): Company | undefined {
    return db.findCompanyBySlug(slug);
  },
};
