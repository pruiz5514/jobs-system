import './PageTemplate.scss'

import { PanelContainer } from '../../atoms/PanelContainer/PanelContainer'
import CardsContainer from '../../organisms/CardsContainer/CardsContainer'
import { Header } from '../../organisms/Header/Header'
import Card from '../../organisms/Card/Card'
import PaginationContainer from '../../molecules/PaginationContainer/PaginationContainer'

interface PageTemplateProps{
    h1: string
}

const PageTemplate: React.FC<PageTemplateProps> = ({h1}) => {
  return (
    <main className='main'>
        <PanelContainer>
            <Header/>
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