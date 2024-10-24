import { IoClose } from 'react-icons/io5';
import './Modal.scss'
import Button from '../Button/Button';

interface ModalProps{
    children: React.ReactNode;
    functionProp: ()=> void;
}

const Modal:React.FC<ModalProps> = ({children, functionProp}) => {
  return (
    <div className='modal-background'>
        <div className='modal-container'>
          <Button onClick={functionProp} className='button-modal'><IoClose /></Button>
            {children}
        </div>
    </div>
  )
}

export default Modal