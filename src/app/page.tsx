import { ApiService } from '@/services/api.service';
import PageTemplate from './components/template/PageTemplate/PageTemplate';
import './globals.scss'

const useApiService = new ApiService();

interface IProps {
  searchParams : {
    page: string;
    size:string;
    name:string;
  }
}

export const generateMetadata = async ({searchParams}:IProps) => {
  const page = searchParams.page ?? 1;
  return { 
    title: `Vacantes - Página ${page}`,
    description: 'Gestion de vacantes'
  }
}

export default async function Home({searchParams}:IProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 6;

  const data = await useApiService.findAll(`vacants?page=${page}&size=${size}`);
  const companies = await useApiService.findAllCompanies(`company/all`);
  
  return (
    
    <>
      <PageTemplate
        title ='Panel de administración'
        subtitle='Vacantes'
        page='Vacante'
        data = {data}
        companies = {companies}
      />
    </>
    
  );
}
