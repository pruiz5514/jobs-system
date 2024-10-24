'use cliente'
import './InputForm.scss'

interface InputFormProps{
  type: string;
  name: string;
  id : string;
  page: string;
}

const InputForm: React.FC<InputFormProps> = ({type, name, id, page }) => {
  return (
    <input className={`inputForm ${page === 'Vacante' ? "inputForm-vacancy" : "inputForm-company"}`} type={type}  name={name} id={id}/>
    
  )
}

export default InputForm