'use client';

import './CardsButtonContainer.scss'
import ButtonCard from '../../atoms/ButtonCard/ButtonCard'
import { GoPencil } from 'react-icons/go'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState } from 'react'
import ModalFormVacancy from '../../organisms/ModalFormVacancy/ModalFormVacancy';
import ModalFormCompany from '../../organisms/ModalFormCompany/ModalFormCompany';

interface CardsButtonContainer{
  page: string,
  idCard: string
}

const CardsButtonContainer:React.FC<CardsButtonContainer> = ({page, idCard}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = ()=> setOpenModal(true)

  const handleCloseModal = ()=> setOpenModal(false)

  return (
    <div className='cards_button-container'>
        <ButtonCard idCard={idCard} onClick={handleOpenModal} className={`${page === 'Vacante' ? 'button-pencil-vacancy' : 'button-pencil-company'}`}><GoPencil /></ButtonCard>
        <ButtonCard idCard={idCard} className='button-bin'><RiDeleteBin6Line /></ButtonCard>

        {
          openModal && ( page==='Vacante'? (<ModalFormVacancy page={page} modalType='edit' functionProp={handleCloseModal}/>) : (<ModalFormCompany page={page} modalType='edit' functionProp={handleCloseModal}/>))
        }
    </div>
  )
}

export default CardsButtonContainer