import { ApiService } from "@/services/api.service";
import PageTemplate from "../components/template/PageTemplate/PageTemplate";

const useApiService = new ApiService();

interface IProps {
  searchParams : {
    page: string;
    size:string;
    name:string;
  }
}

const generateMetadata = async ({searchParams}:IProps) =>{
  const page = searchParams.page ?? 1;
  return{
    title: `Compañías - Página ${page}`,
    description: 'Gestion de compañías'
  }
}

export default async function Companias({searchParams}:IProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 6;

  const data = await useApiService.findAll(`company?page=${page}&size=${size}`);

    return (
      <PageTemplate
        title='Panel de administración'
        subtitle="Compañías"
        page="Compañía"
        data = {data}
      />
    );
  }
  