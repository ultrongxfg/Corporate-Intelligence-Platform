import { companyRepository } from "@/lib/repositories/companyRepository";
import type { Company, CompanySummary } from "@/types/company";

export const companyService = {
  listCompanies(): CompanySummary[] {
    return companyRepository.findAllSummaries();
  },

  getCompanyById(id: string): Company | null {
    return companyRepository.findById(id) ?? null;
  },

  getCompanyBySlug(slug: string): Company | null {
    return companyRepository.findBySlug(slug) ?? null;
  },
};
