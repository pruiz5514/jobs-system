import './AutocompleteContainer.scss'

interface IAutocompleteContainer{
    children: React.ReactNode;
}

const AutocompleteContainer:React.FC<IAutocompleteContainer> = ({children}) => {
  return (
    <div className='autocomplete-container'>
        {children}
    </div>
  )
}

export default AutocompleteContainer