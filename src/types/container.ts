import * as React from 'react'
import { Screens } from './types'

export interface ContainerProps {
  children?: React.ReactNode
  className?: string
  fluid?: boolean | Screens
}
