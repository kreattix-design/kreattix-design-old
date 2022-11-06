import React, { ReactNode } from 'react'
import { BorderStyles, FlexDirections } from './types'

export interface DividerProps {
  children: ReactNode
  className: string
  direction?: FlexDirections
  type?: BorderStyles
  plain?: boolean
  orientation?: 'left' | 'center' | 'right'
}
