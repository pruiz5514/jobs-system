import './Label.scss'

interface LabelProps{
    children: React.ReactNode;
    htmlForm: string
}


const Label:React.FC<LabelProps> = ({children, htmlForm}) => {
  return (
    <label className="label" htmlFor={htmlForm}>{children}</label>
  )
}

export default Label