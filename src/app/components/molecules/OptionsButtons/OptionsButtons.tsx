import Link from 'next/link';
import Button from '../../atoms/Button/Button';
import './OptionsButtons.scss';
import { BiBuildings } from 'react-icons/bi';
import { PiSuitcase } from 'react-icons/pi';

interface OptionsButtonsProps {
    page: string
}  

const OptionsButtons:React.FC<OptionsButtonsProps>= ({page}) => {
  return (
    <div className="options_buttons-container">
      <Link href='/' className='link' style={{textDecoration:'none'}}> <Button className={page === 'Vacante' ? 'button-vacante' : ''} > <PiSuitcase /> Vacantes</Button></Link>
      <Link href='/companias' className='link'> <Button  className={page === 'Compañía' ? 'button-comp' : ''}> <BiBuildings /> Compañías</Button> </Link>
    </div>
  )
}

export default OptionsButtons 