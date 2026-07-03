import { apiError, apiSuccess } from "@/lib/api/response";
import { companyService } from "@/lib/services/companyService";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  const { id } = await params;
  const company = companyService.getCompanyById(id);

  if (!company) {
    return apiError("Company not found", 404);
  }

  return apiSuccess({ company });
}
