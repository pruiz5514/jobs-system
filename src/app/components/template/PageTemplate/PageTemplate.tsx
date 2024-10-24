import './PageTemplate.scss'

import { PanelContainer } from '../../atoms/PanelContainer/PanelContainer'
import CardsContainer from '../../organisms/CardsContainer/CardsContainer'
import { Header } from '../../organisms/Header/Header'
import Card from '../../organisms/Card/Card'
import PaginationContainer from '../../molecules/PaginationContainer/PaginationContainer'
import CardVacancy from '../../organisms/CardVacancy/CardVacancy'
import CardCompany from '../../organisms/CardCompany/CardCompany'

interface PageTemplateProps{
  title: string;
  subtitle: string;
  type: string
}

const PageTemplate: React.FC<PageTemplateProps> = ({title, subtitle, type}) => {
  return (
    <main className='main'>
        <PanelContainer>
            <Header title={title} subtitle={subtitle} type={type}/>
            <CardsContainer>
              {type === 'Vacante' ? (
                <>
                  <CardVacancy type={type}/>
                  <CardVacancy type={type}/>
                  <CardVacancy type={type}/>
                  <CardVacancy type={type}/>
                  <CardVacancy type={type}/>
                  <CardVacancy type={type}/>
                </>
                  
              ) : (
                <>
                  <CardCompany type={type}/>
                  <CardCompany type={type}/>
                  <CardCompany type={type}/>
                  <CardCompany type={type}/>
                  <CardCompany type={type}/>
                  <CardCompany type={type}/>
                </>
              )}
           
            </CardsContainer>
            <PaginationContainer/>
        </PanelContainer>
    </main>
  )
}

export default PageTemplate