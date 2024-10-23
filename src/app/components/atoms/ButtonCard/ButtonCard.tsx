import './ButtonCard.scss'

interface ButtonCardProps {
    children: React.ReactNode;
    className?: string;
  }  

const ButtonCard:React.FC<ButtonCardProps> = ({children, className}) => {
  return (
    <button className={`button-container ${className}`}>
        {children}
    </button>
  )
}

export default ButtonCard