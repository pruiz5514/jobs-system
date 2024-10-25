import './PageTemplate.scss'

import { PanelContainer } from '../../atoms/PanelContainer/PanelContainer'
import CardsContainer from '../../organisms/CardsContainer/CardsContainer'
import { Header } from '../../organisms/Header/Header'
import PaginationContainer from '../../molecules/PaginationContainer/PaginationContainer'
import CardVacancy from '../../organisms/CardVacancy/CardVacancy'
import CardCompany from '../../organisms/CardCompany/CardCompany'
import { ContentCompany, ICompany } from '@/models/company.model'
import { ContentVacancy, IVacancy } from '@/models/vacancy.model'


interface PageTemplateProps{
  title: string;
  subtitle: string;
  page: string
  data: IVacancy | ICompany
}

const PageTemplate: React.FC<PageTemplateProps> = async({title, subtitle, page, data}) => {

  const renderContent = () => {
    if (page === 'Vacante') {
        const vacancyData = data as IVacancy;
        return vacancyData.content.map((vacancy: ContentVacancy) => (
            <CardVacancy key={vacancy.id} data={vacancy} page={page} />
        ));
    } else {
        const companyData = data as ICompany;
        return companyData.content.map((company: ContentCompany) => (
            <CardCompany key={company.id} data={company} page={page} />
        ));
    }
};

  return (
    <main className='main'>
        <PanelContainer>
            <Header title={title} subtitle={subtitle} page={page}/>
            <CardsContainer>
              {renderContent()}
            </CardsContainer>
            <PaginationContainer/>
        </PanelContainer>
    </main>
  )
}

export default PageTemplate