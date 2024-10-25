import Card from '../Card/Card'
import H3 from '../../atoms/H3/H3'
import P from '../../atoms/P/P'
import TextContainer from '../../molecules/TextContainer/TextContainer'
import { ContentCompany } from '@/models/company.model';


interface CardCompanyProps {
    page: string;
    data: ContentCompany
}

const CardCompany:React.FC<CardCompanyProps> = ({page, data}) =>{
  return (
    <Card page={page}>
        <H3>{data.name}</H3>
        <TextContainer>
        <P>{data.location}</P>
        <P>Contacto: {data.contact}</P>
        </TextContainer>
    </Card>
  )
}

export default CardCompany