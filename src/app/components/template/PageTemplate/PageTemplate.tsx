import './PageTemplate.scss'

import { PanelContainer } from '../../atoms/PanelContainer/PanelContainer'


import ViewSection from '../../organisms/ViewSection/ViewSection'
import CardsContainer from '../../organisms/CardsContainer/CardsContainer'
import { Header } from '../../organisms/Header/Header'

interface PageTemplateProps{
    h1: string
}

const PageTemplate: React.FC<PageTemplateProps> = ({h1}) => {
  return (
    <main className='main'>
        <PanelContainer>
            <Header/>
            <CardsContainer/>
            
            
        </PanelContainer>
    </main>
  )
}

export default PageTemplate