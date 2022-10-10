import { Input } from '@/components'
import { useForm } from 'react-hook-form'
import { SearchFormProps } from './types'
import { SearchFormInputs, searchFormSchema } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer } from './styles'

export function SearchForm({ searchIssues }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearch = ({ query }: SearchFormInputs) => {
    searchIssues(query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <Input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
