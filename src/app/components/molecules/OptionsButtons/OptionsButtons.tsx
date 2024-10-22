import './OptionsButtons.scss';

interface OptionsButtonsProps {
    children: React.ReactNode;
}  

const OptionsButtons:React.FC<OptionsButtonsProps>= ({children}) => {
  return (
    <div className="options_buttons-container">{children}</div>
  )
}

export default OptionsButtons