import { Sizes, Variants } from './types'
import { IconNames } from 'kreattix-design-icons/lib/types'
import ButtonGroup from '../components/button/ButtonGroup'

export type IconPositions = 'start' | 'end'
export type ButtonTypes = 'solid' | 'outline' | 'text'

export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: ButtonTypes
  variant?: Variants
  size?: Sizes
  rounded?: boolean
  disabled?: boolean
  icon?: IconNames
  iconPosition?: IconPositions
}

export interface ButtonGroupProps extends ButtonProps {
  className?: string
}

export interface ButtonCompoundProps
  extends React.ForwardRefExoticComponent<ButtonProps> {
  Group: typeof ButtonGroup
}
