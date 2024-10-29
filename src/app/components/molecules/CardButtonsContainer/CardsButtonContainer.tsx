'use client';

import './CardsButtonContainer.scss'
import ButtonCard from '../../atoms/ButtonCard/ButtonCard'
import { GoPencil } from 'react-icons/go'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useState } from 'react'
import ModalFormVacancy from '../../organisms/ModalFormVacancy/ModalFormVacancy';
import ModalFormCompany from '../../organisms/ModalFormCompany/ModalFormCompany';
import { ApiService } from '@/services/api.service';
import { useRouter } from 'next/navigation';

interface CardsButtonContainerProps{
  page: string,
  idCard: string
}

const useApiService = new ApiService();

const CardsButtonContainer:React.FC<CardsButtonContainerProps> = ({page, idCard}) => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = ()=> setOpenModal(true);
  const handleCloseModal = ()=> setOpenModal(false);

  const handleDelete = async()=> {
    await useApiService.destroy(`company`,idCard);
    router.refresh();
  }


  return (
    <div className='cards_button-container'>
        <ButtonCard onClick={handleOpenModal} className={`${page === 'Vacante' ? 'button-pencil-vacancy' : 'button-pencil-company'}`}><GoPencil /></ButtonCard>
        <ButtonCard onClick={handleDelete} className='button-bin'><RiDeleteBin6Line /></ButtonCard>

        {
          openModal && ( page==='Vacante'? (<ModalFormVacancy page={page} modalType='edit' functionProp={handleCloseModal}/>) : (<ModalFormCompany  page={page} modalType='edit' idCard={idCard} functionProp={handleCloseModal}/>))
        }
    </div>
  )
}

export default CardsButtonContainer