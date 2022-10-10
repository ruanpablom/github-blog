import { InputContainer } from './styles'
import { InputProps } from './types'

export function Input({ name, ...props }: InputProps) {
  return <InputContainer id={props.id || name} {...props} />
}
