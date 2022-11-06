import { ForwardRefExoticComponent, HTMLAttributes } from 'react'
import { AlignItems, FlexDirections, Gutters, JustifyContents } from '.'

import GridItem from '../components/grid/GridItem'

export type ResponsiveGutters = {
  sm?: Gutters
  lg?: Gutters
  xl?: Gutters
  xxl?: Gutters
}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  align?: AlignItems
  justify?: JustifyContents
  direction?: FlexDirections
  gutter?: Gutters | ResponsiveGutters
}

export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  span?: number | ResponsiveGutters
  offset?: number | ResponsiveGutters
  order?: number | ResponsiveGutters
}

export interface GridCompoundProps
  extends ForwardRefExoticComponent<GridProps> {
  Item: typeof GridItem
}
