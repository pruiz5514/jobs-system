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
import { ContentCompany } from '@/models/company.model';

interface CardsButtonContainerProps{
  page: string,
  idCard: string,
  companies?: ContentCompany[];
}

const useApiService = new ApiService();

const CardsButtonContainer:React.FC<CardsButtonContainerProps> = ({page, idCard, companies}) => {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = ()=> setOpenModal(true);
  const handleCloseModal = ()=> setOpenModal(false);

  const handleDelete = async()=> {
    if(page === 'Vacante'){
      await useApiService.destroy(`vacants`,idCard);
    }else{
      await useApiService.destroy(`company`,idCard);
    }
    router.refresh();
  }


  return (
    <div className='cards_button-container'>
        <ButtonCard onClick={handleOpenModal} className={`${page === 'Vacante' ? 'button-pencil-vacancy' : 'button-pencil-company'}`}><GoPencil /></ButtonCard>
        <ButtonCard onClick={handleDelete} className='button-bin'><RiDeleteBin6Line /></ButtonCard>

        {
          openModal && ( page==='Vacante'? (<ModalFormVacancy companies={companies} page={page} modalType='edit' idCard={idCard} functionProp={handleCloseModal}/>) : (<ModalFormCompany  page={page} modalType='edit' idCard={idCard} functionProp={handleCloseModal}/>))
        }
    </div>
  )
}

export default CardsButtonContainer