import { AlignItems, FlexDirections, Gutters, JustifyContents } from '..'

export type BoxSizes = 'fullscreen' | 'cover' | 'fill-container' | 'hug-content'

export interface BoxProps {
  children?: React.ReactNode
  className?: string
  align?: AlignItems
  justify?: JustifyContents
  direction?: FlexDirections
  size?: BoxSizes
  flex?: boolean
  wrap?: boolean
  gutter?: Gutters
}
