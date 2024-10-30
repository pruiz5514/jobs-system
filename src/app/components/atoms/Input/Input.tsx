import './Input.scss'

interface InputProps{
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:React.FC<InputProps> = ({placeholder, onChange}) => {
  return (
   <input className='input' type="text" placeholder={placeholder} onChange={onChange}/>
  )
}

export default Input