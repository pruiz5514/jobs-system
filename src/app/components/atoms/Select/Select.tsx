import './Select.scss';

interface SelectProps{
    children: React.ReactNode;
    id: string;
    name:string;
}


const Select:React.FC<SelectProps> = ({children, id, name}) => {
  return (
    <select className="select" name={name} id={id}>
        {children}
    </select>
  )
}

export default Select