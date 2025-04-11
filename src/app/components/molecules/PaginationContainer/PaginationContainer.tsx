'use client';
import './PaginationContainer.scss'
import Button from '../../atoms/Button/Button'
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5'
import P from '../../atoms/P/P'
import { IVacancy } from '@/models/vacancy.model'
import { ICompany } from '@/models/company.model';
import { useRouter, useSearchParams } from 'next/navigation';

interface IPaginationProps{
  data: IVacancy | ICompany
}

const PaginationContainer: React.FC<IPaginationProps> = ({data}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onPageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());

    router.push(`?${params.toString()}`)
  };

  const currentPage = data.pageable.pageNumber;

  return (
    <div className='pagination-container'>
        <Button onClick={()=> onPageChange(currentPage-1)} className={currentPage===0 ? 'hidden' : 'button-pagination'}><IoChevronBackSharp /></Button>
        <P>Página {currentPage + 1} de {data.totalPages} </P>
        <Button onClick={()=> onPageChange(currentPage+1)} className={(currentPage+1)===data.totalPages ? 'hidden' : 'button-pagination'}><IoChevronForwardSharp /></Button>
    </div>
  )
}

export default PaginationContainer