export interface CompanyExecutive {
  name: string;
  title: string;
}

export interface CompanyFinancials {
  revenue: string;
  netIncome: string;
  revenueGrowth: string;
  employees: number;
  marketCap: string;
  founded: number;
}

export interface CompanyKeyMetric {
  label: string;
  value: string;
  trend?: "up" | "down" | "neutral";
}

export interface Company {
  id: string;
  slug: string;
  ticker: string;
  name: string;
  tagline: string;
  industry: string;
  headquarters: string;
  website: string;
  description: string;
  logoInitials: string;
  financials: CompanyFinancials;
  executives: CompanyExecutive[];
  keyMetrics: CompanyKeyMetric[];
  livePrice?: number;
  changePercent?: number;
}

export interface CompanySummary {
  id: string;
  slug: string;
  name: string;
  industry: string;
  headquarters: string;
  logoInitials: string;
  revenue: string;
  netIncome: string;
  employees: number;
}

export interface ApiResponse<T> {
  data: T;
}

export interface ApiErrorResponse {
  error: string;
}
