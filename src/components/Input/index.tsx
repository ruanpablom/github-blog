import { forwardRef } from 'react'
import { InputContainer } from './styles'
import { InputProps } from './types'

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref,
) {
  return <InputContainer {...props} ref={ref} />
})
