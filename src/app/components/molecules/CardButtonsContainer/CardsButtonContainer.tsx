import './CardsButtonContainer.scss'
import ButtonCard from '../../atoms/ButtonCard/ButtonCard'
import { GoPencil } from 'react-icons/go'
import { RiDeleteBin6Line } from 'react-icons/ri'

const CardsButtonContainer = () => {
  return (
    <div className='cards_button-container'>
        <ButtonCard className='button-pencil'><GoPencil /></ButtonCard>
        <ButtonCard className='button-bin'><RiDeleteBin6Line /></ButtonCard>
    </div>
  )
}

export default CardsButtonContainer