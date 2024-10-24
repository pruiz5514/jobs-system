import './Card.scss'

import CardsButtonContainer from '../../molecules/CardButtonsContainer/CardsButtonContainer'

interface CardProps{
  children:React.ReactNode;
  page: string
}

const Card: React.FC<CardProps> = ({children, page}) => {
  return (
    <article className='card-container'>

      {children}
        

      <div className='card_buttons-div'>
        <CardsButtonContainer page={page}/>
      </div>
        
        
    </article>
  )
}

export default Card