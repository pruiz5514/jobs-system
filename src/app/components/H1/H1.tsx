interface H1Props {
    children: React.ReactNode;
}


const H1: React.FC<H1Props> = ({children}) => {
  return (
    <h1 className="h1">{children}</h1>
  )
}

export default H1