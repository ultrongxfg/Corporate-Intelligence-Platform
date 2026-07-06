import { companyRepository } from "@/lib/repositories/companyRepository";
import { marketDataService } from "@/lib/services/marketDataService";
import type { Company, CompanySummary } from "@/types/company";

export const companyService = {
  listCompanies(): CompanySummary[] {
    return companyRepository.findAllSummaries();
  },

  async getCompanyById(id: string): Promise<Company | null> {
    const company = companyRepository.findById(id);
    if (!company) return null;

    const liveData = await marketDataService.getLiveData(company.ticker);

    return {
      ...company,
      livePrice: liveData?.price,
      changePercent: liveData?.changePercent,
    };
  },

  async getCompanyBySlug(slug: string): Promise<Company | null> {
    const company = companyRepository.findBySlug(slug);
    if (!company) return null;

    const liveData = await marketDataService.getLiveData(company.ticker);

    return {
      ...company,
      livePrice: liveData?.price,
      changePercent: liveData?.changePercent,
    };
  },
};