import './NavBar.scss'

interface NavBarProps {
  children: React.ReactNode;
}  

const NavBar:React.FC<NavBarProps> = ({children}) => {
  return (
    <nav className='nav'>{children}</nav>
  )
}

export default NavBar