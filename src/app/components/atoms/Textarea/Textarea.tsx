import './Textarea.scss'

interface TextareaProps{
  id: string;
  name:string;
  page: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}


const Textarea: React.FC<TextareaProps> = ({id, name, page, onChange}) => {
  return (
    <textarea className={`textarea ${page === 'Vacante' ? "textarea-vacancy" : "textarea-company"}`} name={name} id={id} onChange={onChange}/>
    
  )
}

export default Textarea