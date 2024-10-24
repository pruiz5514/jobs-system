import './PageTemplate.scss'

import { PanelContainer } from '../../atoms/PanelContainer/PanelContainer'
import CardsContainer from '../../organisms/CardsContainer/CardsContainer'
import { Header } from '../../organisms/Header/Header'
import PaginationContainer from '../../molecules/PaginationContainer/PaginationContainer'
import CardVacancy from '../../organisms/CardVacancy/CardVacancy'
import CardCompany from '../../organisms/CardCompany/CardCompany'

interface PageTemplateProps{
  title: string;
  subtitle: string;
  page: string
}

const PageTemplate: React.FC<PageTemplateProps> = ({title, subtitle, page}) => {
  return (
    <main className='main'>
        <PanelContainer>
            <Header title={title} subtitle={subtitle} page={page}/>
            <CardsContainer>
              {page === 'Vacante' ? (
                <>
                  <CardVacancy page={page}/>
                  <CardVacancy page={page}/>
                  <CardVacancy page={page}/>
                  <CardVacancy page={page}/>
                  <CardVacancy page={page}/>
                  <CardVacancy page={page}/>
                </>
                  
              ) : (
                <>
                  <CardCompany page={page}/>
                  <CardCompany page={page}/>
                  <CardCompany page={page}/>
                  <CardCompany page={page}/>
                  <CardCompany page={page}/>
                  <CardCompany page={page}/>
                </>
              )}
           
            </CardsContainer>
            <PaginationContainer/>
        </PanelContainer>
    </main>
  )
}

export default PageTemplate