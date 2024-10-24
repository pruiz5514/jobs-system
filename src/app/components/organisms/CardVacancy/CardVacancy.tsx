import Card from '../Card/Card'
import H3 from '../../atoms/H3/H3'
import P from '../../atoms/P/P'
import TextContainer from '../../molecules/TextContainer/TextContainer'

interface CardVacancyProps {
    type: string
}

const CardVacancy:React.FC<CardVacancyProps> = ({type}) => {
  return (
    <Card type={type}>
        <H3>Desarrollador Frontend</H3>
        <TextContainer>
        <P>Se busca Desarrollador con experiencia en React</P>
        <P>Estado: OPEN</P>
        <P>Compañia: TechCorp</P>
        </TextContainer>
    </Card>
  )
}

export default CardVacancy