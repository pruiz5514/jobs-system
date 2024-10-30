import { ContentCompany } from '@/models/company.model'
import Card from '../../atoms/Card/Card'
import H3 from '../../atoms/H3/H3'
import P from '../../atoms/P/P'
import CardsButtonContainer from '../../molecules/CardButtonsContainer/CardsButtonContainer'
import TextContainer from '../../molecules/TextContainer/TextContainer'
import { ContentVacancy } from '@/models/vacancy.model'


interface CardVacancyProps {
    page: string,
    data: ContentVacancy;
    companies?: ContentCompany[];
}

const CardVacancy:React.FC<CardVacancyProps> = ({page, data, companies}) => {
  return (
    <Card page={page} >
        <H3>{data.title}</H3>
        <TextContainer>
        <P>{data.description}</P>
        <P>Activo: {data.status === 'ACTIVE' ? 'Activo' : 'Inactivo'}</P>
        <P>Compañia: {data.company.name}</P>
        </TextContainer>
        <div className='card_buttons-div'>
          <CardsButtonContainer companies={companies} idCard={String(data.id)} page={page}/>
        </div>
    </Card>
  )
}

export default CardVacancy