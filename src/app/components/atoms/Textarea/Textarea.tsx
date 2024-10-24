import './Textarea.scss'

interface TextareaProps{
  id: string;
  name:string;
  page: string
}


const Textarea: React.FC<TextareaProps> = ({id, name, page}) => {
  return (
    <textarea className={`textarea ${page === 'Vacante' ? "textarea-vacancy" : "textarea-company"}`} name={name} id={id}/>
    
  )
}

export default Textarea