import './CardsContainer.scss'

interface CardsContainerProps {
  children: React.ReactNode;
}

const CardsContainer: React.FC<CardsContainerProps> = ({children}) => {
  return (
    <div className='cards-container'>
        {children}
    </div>
  )
}

export default CardsContainer