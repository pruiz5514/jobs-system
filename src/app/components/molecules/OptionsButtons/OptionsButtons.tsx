'use client';

import Button from '../../atoms/Button/Button';
import './OptionsButtons.scss';
import { BiBuildings } from 'react-icons/bi';
import { useState } from 'react';
import { PiSuitcase } from 'react-icons/pi';

interface OptionsButtonsProps {
    //children: React.ReactNode;

}  

const OptionsButtons:React.FC<OptionsButtonsProps>= () => {
  return (
    <div className="options_buttons-container">
      <Button className='button-vacante' > <PiSuitcase /> Vacantes</Button>
      <Button > <BiBuildings /> Compañías</Button>
    </div>
  )
}

export default OptionsButtons 