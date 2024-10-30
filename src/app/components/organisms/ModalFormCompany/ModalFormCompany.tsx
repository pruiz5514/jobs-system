'use client';

import { ApiService } from "@/services/api.service"
import Button from "../../atoms/Button/Button"
import Form from "../../atoms/Form/Form"
import H2 from "../../atoms/H2/H2"
import InputForm from "../../atoms/InputForm/InputForm"
import Label from "../../atoms/Label/Label"
import LabelInputContainer from "../../atoms/LabelInputContainer/LabelInputContainer"
import Modal from "../../atoms/Modal/Modal"
import { ContentCompany, IPostCompany } from "@/models/company.model"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";


interface ModalFormCompanyProp{
  functionProp: ()=> void;
  modalType:string
  page : string
  idCard?: string
}

const useApiService = new ApiService();

const ModalFormCompany:React.FC<ModalFormCompanyProp> = ({functionProp, modalType, page, idCard}) => {
  let view;
  const router = useRouter();

  if(modalType === 'add'){
    view = 'Agregar'
  } else {
    view = 'Editar'
  }

  const initialState = {
    name: '',
    location: '',
    contact:''
  }

  const [company, setCompany] = useState<IPostCompany>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement>)=>{
    const {name , value} = event?.target;
    setCompany({
        ...company,
        [name]:value
    })
};

  if(modalType !== 'add'){
    useEffect(()=>{
      const getCompanyById = async() => {
        if(idCard){
          const company = await useApiService.findById('company', idCard) as ContentCompany;

          setCompany({
            name:company.name,
            location: company.location,
            contact: company.contact
          })
        }
        
      }
      getCompanyById();
    },[]);
  }

  const handleSubmit = async(event:React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault();

    if(modalType === 'add'){
      await useApiService.post('company',company);
    }else{
      if(idCard) await useApiService.edit('company',idCard,company)
    }
    
    functionProp();
    router.refresh()
  }


  return (
    <Modal functionProp={functionProp}>
          <H2>{view} Compañía</H2>
          <Form onSubmit={handleSubmit}>
            <LabelInputContainer>
              <Label htmlForm='name-input'>Nombre</Label>
              <InputForm page={page}  type='text' name='name' id="name-input" value={company?.name} onChange={handleChange}/>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='location-input'>Ubicación</Label>
              <InputForm page={page} type="text" name='location' id="location-input" value={company?.location} onChange={handleChange}/>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='contact-input'>Contacto</Label>
              <InputForm page={page} type="text" name='contact' id="contact-input" value={company?.contact} onChange={handleChange}/>
            </LabelInputContainer>
            <Button className='button-comp-modal'>{view}</Button>
          </Form>
      </Modal>
  )
}

export default ModalFormCompany;  