import './Textarea.scss'

interface TextareaProps{
  id: string;
  name:string;
  page: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string
}


const Textarea: React.FC<TextareaProps> = ({id, name, page, onChange, value}) => {
  return (
    <textarea className={`textarea ${page === 'Vacante' ? "textarea-vacancy" : "textarea-company"}`} name={name} id={id} onChange={onChange} value={value} required/>
    
  )
}

export default Textarea