import { Sizes, Variants } from './types'
import { IconNames } from 'kreattix-design-icons/lib/types'
import ButtonGroup from '../components/button/ButtonGroup'
import ButtonLink from '../components/button/ButtonLink'
import { ForwardRefExoticComponent, HTMLAttributes, ReactNode } from 'react'

export type IconPositions = 'start' | 'end'
export type ButtonTypes = 'solid' | 'outline' | 'text'

export interface ButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: ButtonTypes
  variant?: Variants
  size?: Sizes
  rounded?: boolean
  disabled?: boolean
  icon?: IconNames
  iconPosition?: IconPositions
}

export interface ButtonLinkProps
  extends Omit<HTMLAttributes<HTMLAnchorElement>, 'type'> {
  type?: ButtonTypes
  variant?: Variants
  size?: Sizes
  rounded?: boolean
  icon?: IconNames
  iconPosition?: IconPositions
}

export interface ButtonGroupProps {
  children?: ReactNode
  className?: string
  type?: ButtonTypes
  variant?: Variants
  size?: Sizes
  rounded?: boolean
  icon?: IconNames
  iconPosition?: IconPositions
}

export interface ButtonCompoundProps
  extends ForwardRefExoticComponent<ButtonProps> {
  Group: typeof ButtonGroup
  Link: typeof ButtonLink
}
