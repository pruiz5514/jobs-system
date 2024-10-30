import './Select.scss';

interface SelectProps{
    children: React.ReactNode;
    id: string;
    name:string;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}


const Select:React.FC<SelectProps> = ({children, id, name, onChange}) => {
  return (
    <select className="select" name={name} id={id} onChange={onChange}>
        {children}
    </select>
  )
}

export default Select