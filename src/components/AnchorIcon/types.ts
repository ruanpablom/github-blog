import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { AnchorHTMLAttributes } from 'react'

export interface AnchorIconProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  iconProps: FontAwesomeIconProps
  iconPosition: 'left' | 'right'
}
