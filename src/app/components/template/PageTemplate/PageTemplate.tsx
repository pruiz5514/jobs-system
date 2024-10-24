import './PageTemplate.scss'

import { PanelContainer } from '../../atoms/PanelContainer/PanelContainer'
import CardsContainer from '../../organisms/CardsContainer/CardsContainer'
import { Header } from '../../organisms/Header/Header'
import Card from '../../organisms/Card/Card'
import PaginationContainer from '../../molecules/PaginationContainer/PaginationContainer'

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
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </CardsContainer>
            <PaginationContainer/>
        </PanelContainer>
    </main>
  )
}

export default PageTemplate