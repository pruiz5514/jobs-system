import './Card.scss'

import CardsButtonContainer from '../../molecules/CardButtonsContainer/CardsButtonContainer'

interface CardProps{
  children:React.ReactNode;
  type: string
}

const Card: React.FC<CardProps> = ({children, type}) => {
  return (
    <article className='card-container'>

      {children}
        

      <div className='card_buttons-div'>
        <CardsButtonContainer type={type}/>
      </div>
        
        
    </article>
  )
}

export default Card