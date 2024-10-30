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

export const generateMetadata = async ({searchParams}:IProps) =>{
  const page = searchParams.page ?? 1;
  return{
    title: `Compañías - Página ${page}`,
    description: 'Gestion de compañías'
  }
}



export default async function Companias({searchParams}:IProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 6;
  const name = searchParams.name ? String(searchParams.name) : '';
  console.log(name)

  const data = await useApiService.findAll(`company?page=${page}&size=${size}&name=${name}`);

    return (
      <PageTemplate
        title='Panel de administración'
        subtitle="Compañías"
        page="Compañía"
        data = {data}
      />
    );
  }
  