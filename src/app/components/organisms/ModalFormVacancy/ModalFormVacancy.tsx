import { useState } from "react"
import Button from "../../atoms/Button/Button"
import Form from "../../atoms/Form/Form"
import H2 from "../../atoms/H2/H2"
import InputForm from "../../atoms/InputForm/InputForm"
import Label from "../../atoms/Label/Label"
import LabelInputContainer from "../../atoms/LabelInputContainer/LabelInputContainer"
import Modal from "../../atoms/Modal/Modal"
import Select from "../../atoms/Select/Select"
import Textarea from "../../atoms/Textarea/Textarea"
import { IPostVacancy } from "@/models/vacancy.model"

interface ModalFormVacancyProp{
  functionProp: ()=> void;
  modalType:string
  page: string;
}

const ModalFormVacancy:React.FC<ModalFormVacancyProp> = ({functionProp, modalType,page}) => {
  let view; 

  if(modalType === 'add'){
    view = 'Agregar'
  } else {
    view = 'Editar'
  };

  const initialState:IPostVacancy = {
    title: '',
    description: '',
    status: '',
    companyID: ''
  };

  const [vacant, setVacant] = useState<IPostVacancy>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement | HTMLTextAreaElement>) => {
    const {name, value} = event?.target;
    setVacant({
      ...vacant,
      [name]: value
    })
  }

  const handleSubmit =  async(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    console.log(vacant);
  }

  return (
    <Modal functionProp={functionProp}>
          <H2>{view} vacante</H2>
          <Form onSubmit={handleSubmit}>
            <LabelInputContainer>
              <Label htmlForm='title-input'>Título</Label>
              <InputForm page={page} type='text' name='title' id="title-input" onChange={handleChange}/>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='description-textarea'>Descripción</Label>
              <Textarea page={page} name='description' id="description-textarea" onChange={handleChange}/>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='state-select'>Estado</Label>
              <Select name='status' id="state-select" onChange={handleChange}>
                <option value="ACTIVE" >Activo</option>
                <option value="INACTVE">Inactivo</option>
              </Select>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='company-input'>Compañía</Label>
              <InputForm page={page} type='text' name='companyId' id="company-input" onChange={handleChange}/>
            </LabelInputContainer>
            <Button className='button-vacante-modal'>{view}</Button>
          </Form>
      </Modal>
  )
}

export default ModalFormVacancy;  