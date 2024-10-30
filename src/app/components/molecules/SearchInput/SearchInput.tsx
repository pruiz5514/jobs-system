'use client';

import './SearchInput.scss'
import Input from '../../atoms/Input/Input'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  useEffect(() => {  
    if (params.get("name")) {
      params.delete("name");
      router.replace(`?${params.toString()}`);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    params.set('name', event.currentTarget.value.toString());

    router.replace(`?${params.toString()}`);
  }

  return (
    <div className='search_input-container'>
        <HiMagnifyingGlass />
        <Input onChange={handleChange} placeholder='Buscar...'/>
    </div>
  )
}

export default SearchInput