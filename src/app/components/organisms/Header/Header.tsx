import './Header.scss'
import NavBar from '../../organisms/NavBar/NavBar'
import H1 from '../../atoms/H1/H1'
import ViewSection from '../ViewSection/ViewSection'

interface HeaderProps{
  title: string;
  subtitle: string;
  page: string
}


export const Header: React.FC<HeaderProps> = ({title, subtitle, page}) => {
  return (
    <header className='header'>
        <H1>{title}</H1>
        <NavBar page={page}/>
        <ViewSection subtitle={subtitle} page={page}/>
    </header>
  )
}
