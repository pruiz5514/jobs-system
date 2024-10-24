'use client';

import './CardsButtonContainer.scss'
import ButtonCard from '../../atoms/ButtonCard/ButtonCard'
import { GoPencil } from 'react-icons/go'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState } from 'react'
import ModalFormVacancy from '../../organisms/ModalFormVacancy/ModalFormVacancy';
import ModalFormCompany from '../../organisms/ModalFormCompany/ModalFormCompany';

interface CardsButtonContainer{
  type: string
}

const CardsButtonContainer:React.FC<CardsButtonContainer> = ({type}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = ()=>{
    setOpenModal(true)
  }

  const handleCloseModal = ()=>{
    setOpenModal(false)
  }


  return (
    <div className='cards_button-container'>
        <ButtonCard onClick={handleOpenModal} className={`${type === 'Vacante' ? 'button-pencil-vacancy' : 'button-pencil-company'}`}><GoPencil /></ButtonCard>
        <ButtonCard className='button-bin'><RiDeleteBin6Line /></ButtonCard>

        {
          openModal && ( type==='Vacante'? (<ModalFormVacancy modalType='edit' functionProp={handleCloseModal}/>) : (<ModalFormCompany modalType='edit' functionProp={handleCloseModal}/>))
        }
    </div>
  )
}

export default CardsButtonContainer