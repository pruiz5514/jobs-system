import './TextContainer.scss'

interface TextContainerProps {
    children: React.ReactNode;
  }  

const TextContainer: React.FC<TextContainerProps> = ({children}) => {
  return (
    <div className='text-container'>
        {children}
    </div>
  )
}

export default TextContainer