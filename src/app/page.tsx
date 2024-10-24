import PageTemplate from './components/template/PageTemplate/PageTemplate';
import './globals.scss'

export default function Home() {
  return (
    <>
      <PageTemplate
        title ='Panel de administración'
        subtitle='Vacantes'
        page='Vacante'
      />
    </>
    
  );
}
