import './NavBar.scss'

import OptionsButtons from '../../molecules/OptionsButtons/OptionsButtons'
import SearchInput from '../../molecules/SearchInput/SearchInput'

interface NavBarProps {
  page: string
}  

const NavBar:React.FC<NavBarProps> = ({page}) => {
  return (
    <nav className='nav'>
      <OptionsButtons page={page}/>
      <SearchInput/>
    </nav>
  )
}

export default NavBar