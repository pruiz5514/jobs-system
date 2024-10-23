import './SearchInput.scss'
import Input from '../../atoms/Input/Input'
import { HiMagnifyingGlass } from 'react-icons/hi2'

const SearchInput = () => {
  return (
    <div className='search_input-container'>
        <HiMagnifyingGlass />
        <Input placeholder='Buscar...'/>
    </div>
  )
}

export default SearchInput