import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnchorIconContainer } from './styles'
import { AnchorIconProps } from './types'

export function AnchorIcon({
  children,
  iconProps,
  iconPosition,
  ...props
}: AnchorIconProps) {
  return (
    <AnchorIconContainer {...props}>
      {iconPosition === 'left' && <FontAwesomeIcon {...iconProps} />}
      {children}
      {iconPosition === 'right' && <FontAwesomeIcon {...iconProps} />}
    </AnchorIconContainer>
  )
}
