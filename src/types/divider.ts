import React from 'react'
import { BorderStyles, FlexDirections } from './types'

export interface DividerProps {
  children: React.ReactNode
  className: string
  direction?: FlexDirections
  type?: BorderStyles
  plain?: boolean
  orientation?: 'left' | 'center' | 'right'
}
