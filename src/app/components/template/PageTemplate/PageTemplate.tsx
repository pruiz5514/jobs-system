import './PageTemplate.scss'
import H1 from '../../atoms/H1/H1'
import { PanelContainer } from '../../atoms/PanelContainer/PanelContainer'
import Button from '../../atoms/Button/Button'
import { IoBagRemoveOutline } from 'react-icons/io5'
import NavBar from '../../organisms/NavBar/NavBar'
import OptionsButtons from '../../molecules/OptionsButtons/OptionsButtons'

const PageTemplate = () => {
  return (
    <main className='main'>
        <PanelContainer>
            <H1>Panel de administración</H1>

            <NavBar>
                <OptionsButtons>
                    <Button> <IoBagRemoveOutline /> Vacantes</Button>
                    <Button> <IoBagRemoveOutline /> Vacantes</Button>
                </OptionsButtons>
            </NavBar>

            
        </PanelContainer>
    </main>
  )
}

export default PageTemplate