import './Button.scss'

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: ()=> void;
  }  

const Button: React.FC<ButtonProps>  = ({children, className, onClick}) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
        {children}
    </button>
  )
}

export default Button