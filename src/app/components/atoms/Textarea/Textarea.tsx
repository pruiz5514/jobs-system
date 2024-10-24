import './Textarea.scss'

interface TextareaProps{
  id: string;
  name:string;
}


const Textarea: React.FC<TextareaProps> = ({id, name}) => {
  return (
    <textarea className='textarea' name={name} id={id}/>
    
  )
}

export default Textarea