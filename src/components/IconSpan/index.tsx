import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconSpanContainer } from './styles'
import { IconSpanProps } from './types'

export function IconSpan({ icon, spanColor, iconColor, text }: IconSpanProps) {
  return (
    <IconSpanContainer spanColor={spanColor} iconColor={iconColor}>
      {typeof icon === 'string' ? (
        <img src={icon} alt={text} />
      ) : (
        <FontAwesomeIcon icon={icon} />
      )}
      <span>{text}</span>
    </IconSpanContainer>
  )
}
