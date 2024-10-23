import './P.scss'

interface Pprops{
    children: React.ReactNode;
}

const P:React.FC<Pprops> = ({children}) => {
  return (
    <p className='p'>{children}</p>
  )
}

export default P