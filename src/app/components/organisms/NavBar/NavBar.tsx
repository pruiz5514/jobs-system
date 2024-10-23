import './NavBar.scss'

import OptionsButtons from '../../molecules/OptionsButtons/OptionsButtons'
import SearchInput from '../../molecules/SearchInput/SearchInput'

// interface NavBarProps {
//   children: React.ReactNode;
// }  

const NavBar = () => {
  return (
    <nav className='nav'>
      <OptionsButtons/>
      <SearchInput/>
    </nav>
  )
}

export default NavBar