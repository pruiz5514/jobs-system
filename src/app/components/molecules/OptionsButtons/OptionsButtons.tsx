'use client';

import Link from 'next/link';
import Button from '../../atoms/Button/Button';
import './OptionsButtons.scss';
import { BiBuildings } from 'react-icons/bi';
import { PiSuitcase } from 'react-icons/pi';

interface OptionsButtonsProps {
    type: string

}  

const OptionsButtons:React.FC<OptionsButtonsProps>= ({type}) => {
  return (
    <div className="options_buttons-container">
      <Link href='/' className='link' style={{textDecoration:'none'}}> <Button className={type === 'Vacante' ? 'button-vacante' : ''} > <PiSuitcase /> Vacantes</Button></Link>
      <Link href='/companias' className='link'> <Button  className={type === 'Compañía' ? 'button-comp' : ''}> <BiBuildings /> Compañías</Button> </Link>
    </div>
  )
}

export default OptionsButtons 