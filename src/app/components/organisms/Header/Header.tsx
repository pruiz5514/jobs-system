import './Header.scss'
import NavBar from '../../organisms/NavBar/NavBar'
import H1 from '../../atoms/H1/H1'
import ViewSection from '../ViewSection/ViewSection'
import { ContentCompany } from '@/models/company.model';

interface HeaderProps{
  title: string;
  subtitle: string;
  page: string;
  companies?: ContentCompany;
}


export const Header: React.FC<HeaderProps> = ({title, subtitle, page, companies}) => {
  return (
    <header className='header'>
        <H1>{title}</H1>
        <NavBar page={page}/>
        <ViewSection subtitle={subtitle} page={page} companies={companies}/>
    </header>
  )
}
