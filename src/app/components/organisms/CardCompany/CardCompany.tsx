import Card from '../Card/Card'
import H3 from '../../atoms/H3/H3'
import P from '../../atoms/P/P'
import TextContainer from '../../molecules/TextContainer/TextContainer'

interface CardCompanyProps {
    type: string
}

const CardCompany:React.FC<CardCompanyProps> = ({type}) =>{
  return (
    <Card type={type}>
        <H3>TechCorp</H3>
        <TextContainer>
        <P>Ciudad de México</P>
        <P>Contacto: 555-0101</P>
        </TextContainer>
    </Card>
  )
}

export default CardCompany