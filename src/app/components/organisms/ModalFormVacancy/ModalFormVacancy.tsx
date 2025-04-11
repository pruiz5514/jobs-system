import { useEffect, useState } from "react"
import Button from "../../atoms/Button/Button"
import Form from "../../atoms/Form/Form"
import H2 from "../../atoms/H2/H2"
import InputForm from "../../atoms/InputForm/InputForm"
import Label from "../../atoms/Label/Label"
import LabelInputContainer from "../../atoms/LabelInputContainer/LabelInputContainer"
import Modal from "../../atoms/Modal/Modal"
import Select from "../../atoms/Select/Select"
import Textarea from "../../atoms/Textarea/Textarea"
import { ContentVacancy, IPostVacancy } from "@/models/vacancy.model"
import { ContentCompany } from "@/models/company.model"
import { ApiService } from "@/services/api.service"
import { useRouter } from "next/navigation"
import AutocompleteContainer from "../../atoms/AutocompleteContainer/AutocompleteContainer"

interface ModalFormVacancyProp{
  functionProp: ()=> void;
  modalType:string
  page: string;
  companies?: ContentCompany[];
  idCard?: string
}

const useApiService = new ApiService();

const ModalFormVacancy:React.FC<ModalFormVacancyProp> = ({functionProp, modalType,page,companies, idCard}) => {
  const router = useRouter();
  let view; 

  if(modalType === 'add'){
    view = 'Agregar'
  } else {
    view = 'Editar'
  };

  const initialState:IPostVacancy = {
    title: '',
    description: '',
    status: 'ACTIVE',
    company_id: 0
  };

  const [vacant, setVacant] = useState<IPostVacancy>(initialState);
  const [searchedCompanies, setSearchedCompanies] = useState<ContentCompany[]>([])
  const [companySelected, setCompanySelected] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement |HTMLSelectElement | HTMLTextAreaElement>) => {
    const {name, value} = event?.target;
    setVacant({
      ...vacant,
      [name]: value
    })
  }

  const companyChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    if(companies){
      const searchInput =  event.currentTarget.value.toLocaleLowerCase() as string;
      setCompanySelected(searchInput);
      if(searchInput === ''){
        setSearchedCompanies([])
      } else{
        const filteredCompanies = companies?.filter((company)=>company.name.toLocaleLowerCase().includes(searchInput));
        setSearchedCompanies(filteredCompanies)
      }
    }
  }

  const handelCompanySelect = (company: ContentCompany) => {
    setCompanySelected(company.name)
    setVacant({
      ...vacant, 
      company_id: Number(company.id)
    })
    setSearchedCompanies([]);
  }

  useEffect(()=>{
    if(modalType !=='add'){
      const getVacantById = async()=>{
        if(idCard){
          const vacant = await useApiService.findById('vacancy',idCard) as ContentVacancy;
  
          setVacant({
            title: vacant.title,
            description: vacant.description,
            status: vacant.status,
            company_id: Number(vacant.company.id),
          })
          setCompanySelected(vacant.company.name)
        }
      }
      getVacantById();
    }
  },[])


  const handleSubmit =  async(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    if(modalType === 'add'){
      await useApiService.postVacancy('vacancy',vacant);
    }else{
      if(idCard) await useApiService.editVacant('vacancy', idCard, vacant);
    }
    
    functionProp();
    router.refresh();
  }
  
  return (
    <Modal functionProp={functionProp}>
          <H2>{view} vacante</H2>
          <Form onSubmit={handleSubmit}>
            <LabelInputContainer>
              <Label htmlForm='title-input'>Título</Label>
              <InputForm page={page} type='text' name='title' id="title-input" onChange={handleChange} value={vacant.title}/>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='description-textarea'>Descripción</Label>
              <Textarea page={page} name='description' id="description-textarea" onChange={handleChange} value={vacant.description}/>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='state-select'>Estado</Label>
              <Select name='status' id="state-select" onChange={handleChange} value={vacant.status}>
                {modalType ==='add' ? (
                  <option value="ACTIVE" >Activo</option>
                ) : (
                  <>
                    <option value="ACTIVE" >Activo</option>
                    <option value="INACTIVE">Inactivo</option>
                  </>
                )}
                
              </Select>
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlForm='company-input'>Compañía</Label>
              <div>
                <InputForm page={page} type='text' name='companyId' id="company-input" onChange={companyChange} value={companySelected} />
                {searchedCompanies.length>0 && (
                  <AutocompleteContainer>
                    {searchedCompanies?.map((company)=>(
                      <span className="autocomplete-span" onClick={()=>handelCompanySelect(company)} key={company.id}>{company.name}</span>
                    ))}
                  </AutocompleteContainer>
                )}
              </div>
              
            </LabelInputContainer>
            <Button className='button-vacante-modal'>{view}</Button>
          </Form>
      </Modal>
  )
}

export default ModalFormVacancy;  