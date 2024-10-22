import React from 'react'

interface NavBarProps {
  children: React.ReactNode;
}  

const NavBar:React.FC<NavBarProps> = ({children}) => {
  return (
    <nav>{children}</nav>
  )
}

export default NavBar