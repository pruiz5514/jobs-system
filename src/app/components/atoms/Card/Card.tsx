import './Card.scss'



interface CardProps{
  children:React.ReactNode;
  page: string
}

const Card: React.FC<CardProps> = ({children}) => {
  return (
    <article className='card-container'>

      {children}
        
    </article>
  )
}

export default Card