'use client';

import { ApiService } from "@/services/api.service"
import Button from "../../atoms/Button/Button"
import Form from "../../atoms/Form/Form"
import H2 from "../../atoms/H2/H2"
import InputForm from "../../atoms/InputForm/InputForm"
import Label from "../../atoms/Label/Label"
import LabelInputContainer from "../../atoms/LabelInputContainer/LabelInputContainer"
import Modal from "../../atoms/Modal/Modal"
import { IPostCompany } from "@/models/company.model"
import { useRouter } from "next/navigation"


interface ModalFormCompanyProp{
  functionProp: ()=> void;
  modalType:string
  page : string
}

const useApiService = new ApiService();

const ModalFormCompany:React.FC<ModalFormCompanyProp> = ({functionProp, modalType, page}) => {
  let view;

  if(modalType === 'add'){
    view = 'Agregar'
  } else {
    view = 'Editar'
  }

  const router = useRouter();
  const handleSubmit = async(event:React.FormEvent<HTMLFormElement>)=> {
    
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const title = formData.get('name-input') as string;
    const location = formData.get('location-input') as string;
    const contact = formData.get('contact-input') as string;
    
    const newCompany: IPostCompany ={
      name: title,
      location: location,
      contact: contact
    }

    await useApiService.post('company',newCompany);
    functionProp();
    router.refresh()
  }

  return (
    <Modal functionProp={functionProp}>
          <H2>{view} Compañía</H2>
          <Form onSubmit={handleSubmit}>
            <LabelInputContainer>
              <Label htmlForm='name-input'>Nombre</Label>
              <InputForm page={page}  type='text' name='name-input' id="name-input"/>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='location-input'>Ubicación</Label>
              <InputForm page={page} type="text" name='location-input' id="location-input"/>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='contact-input'>Contacto</Label>
              <InputForm page={page} type="text" name='contact-input' id="contact-input"/>
            </LabelInputContainer>
            <Button className='button-comp-modal'>{view}</Button>
          </Form>
      </Modal>
  )
}

export default ModalFormCompany;  