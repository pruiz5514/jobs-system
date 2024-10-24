import Button from "../../atoms/Button/Button"
import Form from "../../atoms/Form/Form"
import H2 from "../../atoms/H2/H2"
import InputForm from "../../atoms/InputForm/InputForm"
import Label from "../../atoms/Label/Label"
import LabelInputContainer from "../../atoms/LabelInputContainer/LabelInputContainer"
import Modal from "../../atoms/Modal/Modal"
import Select from "../../atoms/Select/Select"
import Textarea from "../../atoms/Textarea/Textarea"

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
  }

  return (
    <Modal functionProp={functionProp}>
          <H2>{view} vacante</H2>
          <Form>
            <LabelInputContainer>
              <Label htmlForm='title-input'>Título</Label>
              <InputForm page={page} type='text' name='title-input' id="title-input"/>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='description-textarea'>Descripción</Label>
              <Textarea page={page} name='description-textarea' id="description-textarea"/>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='state-select'>Estado</Label>
              <Select name='state-select' id="state-select">
                <option value="">OPEN</option>
              </Select>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='company-select'>Compañía</Label>
              <Select name='company-select' id="company-select">
                <option value="">Selecciona una compañía</option>
              </Select>
            </LabelInputContainer>
            <Button className='button-vacante-modal'>{view}</Button>
          </Form>
      </Modal>
  )
}

export default ModalFormVacancy;  