import { ThemeType } from '@/@types/styled'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type IconSpanProps = {
  icon: string | IconDefinition
  spanColor: keyof ThemeType
  iconColor: keyof ThemeType
  text: string
}
