import { Sizes, Variants } from './types'
import { IconNames } from 'kreattix-design-icons/lib/types'
import ButtonGroup from '../components/button/ButtonGroup'
import ButtonLink from '../components/button/ButtonLink'
import * as React from 'react'

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

export interface ButtonLinkProps
  extends Omit<React.HTMLAttributes<HTMLAnchorElement>, 'type'> {
  type?: ButtonTypes
  variant?: Variants
  size?: Sizes
  rounded?: boolean
  icon?: IconNames
  iconPosition?: IconPositions
}

export interface ButtonGroupProps {
  children?: React.ReactNode
  className?: string
  type?: ButtonTypes
  variant?: Variants
  size?: Sizes
  rounded?: boolean
  icon?: IconNames
  iconPosition?: IconPositions
}

export interface ButtonCompoundProps
  extends React.ForwardRefExoticComponent<ButtonProps> {
  Group: typeof ButtonGroup
  Link: typeof ButtonLink
}
