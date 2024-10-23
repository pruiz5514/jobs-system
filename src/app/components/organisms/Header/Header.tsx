import './Header.scss'
import NavBar from '../../organisms/NavBar/NavBar'
import H1 from '../../atoms/H1/H1'
import ViewSection from '../ViewSection/ViewSection'

export const Header = () => {
  return (
    <header className='header'>
        <H1>Panel de Administración</H1>
        <NavBar/>
        <ViewSection/>
    </header>
  )
}
