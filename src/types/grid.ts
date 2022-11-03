import React from 'react'
import { AlignItems, FlexDirections, Gutters, JustifyContents } from '.'

import GridItem from '../components/grid/GridItem'

export type ResponsiveGutters = {
  sm?: Gutters
  lg?: Gutters
  xl?: Gutters
  xxl?: Gutters
}

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: AlignItems
  justify?: JustifyContents
  direction?: FlexDirections
  gutter?: Gutters | ResponsiveGutters
}

export interface GridItemProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number | ResponsiveGutters
  offset?: number | ResponsiveGutters
  order?: number | ResponsiveGutters
}

export interface GridCompoundProps
  extends React.ForwardRefExoticComponent<GridProps> {
  Item: typeof GridItem
}
