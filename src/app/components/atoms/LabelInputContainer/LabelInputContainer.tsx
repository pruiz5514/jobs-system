import './LabelInputContainer.scss'

interface LabelInputContainerProps{
    children: React.ReactNode;
}

const LabelInputContainer:React.FC<LabelInputContainerProps> = ({children}) => {
  return (
    <div className='label_input-container'>
        {children}
    </div>
  )
}

export default LabelInputContainer