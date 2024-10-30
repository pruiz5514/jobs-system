'use cliente'
import './InputForm.scss'

interface InputFormProps{
  type: string;
  name: string;
  id : string;
  page: string;
  value?: string; 
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputFormProps> = ({type, name, id, page, value, onChange }) => {
  return (
    <input className={`inputForm ${page === 'Vacante' ? "inputForm-vacancy" : "inputForm-company"}`} type={type}  name={name} value={value} id={id} onChange={onChange} required/>
  )
}

export default InputForm