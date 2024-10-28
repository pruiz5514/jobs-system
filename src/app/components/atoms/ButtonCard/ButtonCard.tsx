import './ButtonCard.scss'

interface ButtonCardProps {
    children: React.ReactNode;
    className?: string;
    onClick? : ()=> void;
    idCard : string
  }  

const ButtonCard:React.FC<ButtonCardProps> = ({children, className, onClick, idCard}) => {
  return (
    <button id-card={idCard} onClick={onClick} className={`button-container ${className}`}>
        {children}
    </button>
  )
}

export default ButtonCard