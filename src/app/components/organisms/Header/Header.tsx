import './Header.scss'
import NavBar from '../../organisms/NavBar/NavBar'
import H1 from '../../atoms/H1/H1'
import ViewSection from '../ViewSection/ViewSection'

interface HeaderProps{
  title: string;
  subtitle: string;
  type: string
}


export const Header: React.FC<HeaderProps> = ({title, subtitle, type}) => {
  return (
    <header className='header'>
        <H1>{title}</H1>
        <NavBar type={type}/>
        <ViewSection subtitle={subtitle} type={type}/>
    </header>
  )
}
