interface H2Props {
    children: React.ReactNode;
}


const H2: React.FC<H2Props>  = ({children}) => {
  return (
    <h2>{children}</h2>
  )
}

export default H2