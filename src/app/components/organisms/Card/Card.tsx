import './Card.scss'
import H3 from '../../atoms/H3/H3'
import P from '../../atoms/P/P'
import TextContainer from '../../molecules/TextContainer/TextContainer'
import ButtonCard from '../../atoms/ButtonCard/ButtonCard'
import { GoPencil } from 'react-icons/go'

const Card = () => {
  return (
    <article className='card-container'>
        <H3>Desarrollador Frontend</H3>

        <TextContainer>
          <P>Se busca Desarrollador con experiencia en React</P>
          <P>Estado: OPEN</P>
          <P>Compañia: TechCorp</P>
        </TextContainer>

        <ButtonCard className='button-pencil'><GoPencil /></ButtonCard>
        <ButtonCard className='button-pencil'><GoPencil /></ButtonCard>
        
    </article>
  )
}

export default Card