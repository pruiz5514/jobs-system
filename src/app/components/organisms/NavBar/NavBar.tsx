import './NavBar.scss'

import OptionsButtons from '../../molecules/OptionsButtons/OptionsButtons'
import SearchInput from '../../molecules/SearchInput/SearchInput'

interface NavBarProps {
  type: string
}  

const NavBar:React.FC<NavBarProps> = ({type}) => {
  return (
    <nav className='nav'>
      <OptionsButtons type={type}/>
      <SearchInput/>
    </nav>
  )
}

export default NavBar