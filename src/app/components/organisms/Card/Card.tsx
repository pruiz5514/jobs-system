import './Card.scss'
import H3 from '../../atoms/H3/H3'
import P from '../../atoms/P/P'
import TextContainer from '../../molecules/TextContainer/TextContainer'
import CardsButtonContainer from '../../molecules/CardButtonsContainer/CardsButtonContainer'


const Card = () => {
  return (
    <article className='card-container'>
        <H3>Desarrollador Frontend</H3>

        <TextContainer>
          <P>Se busca Desarrollador con experiencia en React</P>
          <P>Estado: OPEN</P>
          <P>Compañia: TechCorp</P>
        </TextContainer>

        <div className='card_buttons-div'>
          <CardsButtonContainer/>
        </div>
        
        
    </article>
  )
}

export default Card