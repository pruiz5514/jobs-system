import './InputForm.scss'

interface InputFormProps{
  type: string;
  name: string;
  id : string;
}

const InputForm: React.FC<InputFormProps> = ({type, name, id}) => {
  return (
    <input className='inputForm' type={type}  name={name} id={id}/>
  )
}

export default InputForm