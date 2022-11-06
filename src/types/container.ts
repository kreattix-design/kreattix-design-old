import { ReactNode } from 'react'
import { Screens } from './types'

export interface ContainerProps {
  children?: ReactNode
  className?: string
  fluid?: boolean | Screens
}
