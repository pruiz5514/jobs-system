import Card from '../Card/Card'
import H3 from '../../atoms/H3/H3'
import P from '../../atoms/P/P'
import TextContainer from '../../molecules/TextContainer/TextContainer'
import { ContentVacancy } from '@/models/vacancy.model'


interface CardVacancyProps {
    page: string,
    data: ContentVacancy
}

const CardVacancy:React.FC<CardVacancyProps> = ({page, data}) => {
  return (
    <Card page={page} >
        <H3>{data.title}</H3>
        <TextContainer>
        <P>{data.description}</P>
        <P>Activo: {data.status === 'ACTIVE' ? 'Activo' : 'Inactivo'}</P>
        <P>Compañia: {data.company.name}</P>
        </TextContainer>
    </Card>
  )
}

export default CardVacancy