import './Form.scss'

interface FormProps{
    children: React.ReactNode;
}

const Form : React.FC<FormProps> = ({children}) => {
  return (
    <form className='form'>
        {children}
    </form>
  )
}

export default Form