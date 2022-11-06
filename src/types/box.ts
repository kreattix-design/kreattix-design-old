import { ReactNode } from 'react'
import {
  AlignItems,
  FlexDirections,
  Gutters,
  JustifyContents,
  ResponsiveGutters
} from '../types'

export type BoxSizes = 'fullscreen' | 'cover' | 'fill-container' | 'hug-content'

export interface BoxProps {
  children?: ReactNode
  className?: string
  align?: AlignItems
  justify?: JustifyContents
  direction?: FlexDirections
  size?: BoxSizes
  flex?: boolean
  wrap?: boolean
  gutter?: Gutters | ResponsiveGutters
}
