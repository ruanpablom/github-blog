import styled from 'styled-components'
import { InputProps } from './types'

export const InputContainer = styled.input<InputProps>`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  outline: 0;
  font-size: 1rem;
  line-height: 160%;

  ::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  :focus {
    border: 1px solid ${(props) => props.theme.blue};
  }
`
