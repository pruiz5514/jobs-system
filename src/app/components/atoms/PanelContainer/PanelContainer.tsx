import './PanelContainer.scss';

interface PanelContainerProps {
  children: React.ReactNode;
}

export const PanelContainer: React.FC<PanelContainerProps>  = ({children}) => {
  return (
    <section className='panel_container-section'>
      {children}
    </section>
  )
}
