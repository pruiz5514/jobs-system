import './PaginationContainer.scss'
import Button from '../../atoms/Button/Button'
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5'

const PaginationContainer = () => {
  return (
    <div className='pagination-container'>
        <Button className='button-pagination'><IoChevronBackSharp /></Button>
        <p>Página 1 de 2 </p>
        <Button className='button-pagination'><IoChevronForwardSharp /></Button>
    </div>
  )
}

export default PaginationContainer