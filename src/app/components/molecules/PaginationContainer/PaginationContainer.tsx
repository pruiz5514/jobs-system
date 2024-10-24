import './PaginationContainer.scss'
import Button from '../../atoms/Button/Button'
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5'
import P from '../../atoms/P/P'



const PaginationContainer = () => {
  return (
    <div className='pagination-container'>
        <Button className='button-pagination'><IoChevronBackSharp /></Button>
        <P>Página 1 de 2 </P>
        <Button className='button-pagination'><IoChevronForwardSharp /></Button>
    </div>
  )
}

export default PaginationContainer