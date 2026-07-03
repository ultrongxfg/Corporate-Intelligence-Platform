import type { Company } from "@/types/company";
import { companySeedData } from "@/lib/db/seed";

/**
 * In-memory database store.
 * Replace with a real database adapter when ready to persist data.
 */
class InMemoryDatabase {
  private companies: Map<string, Company>;

  constructor(seed: Company[]) {
    this.companies = new Map(seed.map((company) => [company.id, company]));
  }

  findAllCompanies(): Company[] {
    return Array.from(this.companies.values());
  }

  findCompanyById(id: string): Company | undefined {
    return this.companies.get(id);
  }

  findCompanyBySlug(slug: string): Company | undefined {
    return this.findAllCompanies().find((company) => company.slug === slug);
  }
}

const globalForDb = globalThis as unknown as { __db?: InMemoryDatabase };

export const db = globalForDb.__db ?? new InMemoryDatabase(companySeedData);

if (process.env.NODE_ENV !== "production") {
  globalForDb.__db = db;
}
