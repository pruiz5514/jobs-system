import './ViewSection.scss'
import H2 from '../../atoms/H2/H2'
import Button from '../../atoms/Button/Button'
import { IoAddCircleOutline } from 'react-icons/io5'

interface ViewSectionProps{
  subtitle: string;
  type: string
}


const ViewSection: React.FC<ViewSectionProps> = ({subtitle, type}) => {
  return (
    <div className='view_section-container'>
        <H2>{subtitle}</H2>
        <Button className={`${type==="Vacante"? "button-vacante" : "button-comp"}`}> <IoAddCircleOutline /> Agregar {type}</Button>
    </div>
  )
}

export default ViewSection