import { apiSuccess } from "@/lib/api/response";
import { companyService } from "@/lib/services/companyService";

export async function GET() {
  const companies = companyService.listCompanies();
  return apiSuccess({ companies });
}
