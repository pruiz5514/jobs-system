import './ViewSection.scss'
import H2 from '../../atoms/H2/H2'
import Button from '../../atoms/Button/Button'
import { IoAddCircleOutline } from 'react-icons/io5'

const ViewSection = () => {
  return (
    <div className='view_section-container'>
        <H2>Vacantes</H2>
        <Button className={'button-vacante'}> <IoAddCircleOutline /> Agregar Vacante</Button>
    </div>
  )
}

export default ViewSection