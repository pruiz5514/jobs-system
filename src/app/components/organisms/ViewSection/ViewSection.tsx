'use client';

import './ViewSection.scss'
import H2 from '../../atoms/H2/H2'
import Button from '../../atoms/Button/Button'
import { IoAddCircleOutline } from 'react-icons/io5'
import { useState } from 'react';
import ModalFormVacancy from '../ModalFormVacancy/ModalFormVacancy';
import ModalFormCompany from '../ModalFormCompany/ModalFormCompany';

interface ViewSectionProps{
  subtitle: string;
  page: string
}


const ViewSection: React.FC<ViewSectionProps> = ({subtitle, page}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = ()=> setOpenModal(true);

  const handleCloseModal = ()=> setOpenModal(false);

  return (
    <div className='view_section-container'>
        <H2>{subtitle}</H2>
        <Button onClick={handleOpenModal} className={`${page==="Vacante"? "button-vacante" : "button-comp"}`}> <IoAddCircleOutline /> Agregar {page}</Button>
        {
          openModal && ( page==='Vacante'? (<ModalFormVacancy page={page} modalType='add' functionProp={handleCloseModal}/>) : (<ModalFormCompany page={page} modalType='add' functionProp={handleCloseModal}/>))
        }
        
    </div>
  )
}

export default ViewSection