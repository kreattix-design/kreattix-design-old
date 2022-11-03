import { Sizes } from '../../utils'
import { IconNames } from 'kreattix-design-icons'

export type IconShapes = 'none' | 'circle' | 'square'
export type IconTypes = 'outlined' | 'filled' | 'toned'

export interface IconProps {
  icon: IconNames
  shape?: IconShapes
  type?: IconTypes
  size?: Sizes
  color?: string
  style?: React.CSSProperties
  className?: string
}
