import './H3.scss';

interface H3Props {
    children: React.ReactNode;
}

const H3: React.FC<H3Props>  = ({children}) => {
  return (
    <h3 className="h3">{children}</h3>
  )
}

export default H3