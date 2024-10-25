import { ApiService } from '@/services/api.service';
import PageTemplate from './components/template/PageTemplate/PageTemplate';
import './globals.scss'

const useApiService = new ApiService();

export default async function Home() {
  const data = await useApiService.findAll('vacants');
  return (
    
    <>
      <PageTemplate
        title ='Panel de administración'
        subtitle='Vacantes'
        page='Vacante'
        data = {data}
      />
    </>
    
  );
}
