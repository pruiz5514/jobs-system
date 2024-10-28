import { ApiService } from "@/services/api.service";
import PageTemplate from "../components/template/PageTemplate/PageTemplate";

const useApiService = new ApiService();

export default async function Companias() {
  const data = await useApiService.findAll('company?page=1&size=10000');

    return (
      <PageTemplate
        title='Panel de administración'
        subtitle="Compañías"
        page="Compañía"
        data = {data}
      />
    );
  }
  