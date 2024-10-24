import './ButtonCard.scss'

interface ButtonCardProps {
    children: React.ReactNode;
    className?: string;
    onClick? : ()=> void
  }  

const ButtonCard:React.FC<ButtonCardProps> = ({children, className, onClick}) => {
  return (
    <button onClick={onClick} className={`button-container ${className}`}>
        {children}
    </button>
  )
}

export default ButtonCard