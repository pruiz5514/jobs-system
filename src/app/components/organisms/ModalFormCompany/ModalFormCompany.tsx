import Button from "../../atoms/Button/Button"
import Form from "../../atoms/Form/Form"
import H2 from "../../atoms/H2/H2"
import InputForm from "../../atoms/InputForm/InputForm"
import Label from "../../atoms/Label/Label"
import LabelInputContainer from "../../atoms/LabelInputContainer/LabelInputContainer"
import Modal from "../../atoms/Modal/Modal"


interface ModalFormCompanyProp{
  functionProp: ()=> void;
  modalType:string
}

const ModalFormCompany:React.FC<ModalFormCompanyProp> = ({functionProp, modalType}) => {
  let view;

  if(modalType === 'add'){
    view = 'Agregar'
  } else {
    view = 'Editar'
  }

  return (
    <Modal functionProp={functionProp}>
          <H2>{view} Compañía</H2>
          <Form>
            <LabelInputContainer>
              <Label htmlForm='name-input'>Nombre</Label>
              <InputForm type='text' name='name-input' id="name-input"/>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='location-input'>Ubicación</Label>
              <InputForm type="text" name='location-input' id="location-input"/>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='state-select'>Contacto</Label>
              <InputForm type="text" name='location-input' id="location-input"/>
            </LabelInputContainer>
            <Button className='button-comp-modal'>{view}</Button>
          </Form>
      </Modal>
  )
}

export default ModalFormCompany;  