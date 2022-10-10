import styled from 'styled-components'
import { IconSpanProps } from './types'

type ISProps = {} & Omit<IconSpanProps, 'icon' | 'text'>

export const IconSpanContainer = styled.div<ISProps>`
  display: flex;
  gap: 8px;
  align-items: center;

  span {
    line-height: 1.6rem;
    color: ${(props) => props.theme[props.spanColor]};
  }

  img {
    width: 18px;
    height: 18px;
  }

  svg {
    color: ${(props) => props.theme[props.iconColor]};
  }
`
