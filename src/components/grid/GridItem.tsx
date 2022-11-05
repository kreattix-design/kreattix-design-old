import React from 'react'
import { classnames } from '../../utils'
import { GridItemProps, ResponsiveGutters } from '../../types'

const GridItem: React.FC<GridItemProps> = (props) => {
  const { children, className, span, offset, order, ...rest } = props
  const responsiveClasses: { [key: string]: boolean } = {}
  if (span && typeof span === 'object') {
    Object.keys(span).forEach((item) => {
      const key = item as keyof ResponsiveGutters
      responsiveClasses[`col-${key}-${span[key]}`] = true
    })
  }
  if (offset && typeof offset === 'object') {
    Object.keys(offset).forEach((item) => {
      const key = item as keyof ResponsiveGutters
      responsiveClasses[`offset-${key}-${offset[key]}`] = true
    })
  }
  if (order && typeof order === 'object') {
    Object.keys(order).forEach((item) => {
      const key = item as keyof ResponsiveGutters
      responsiveClasses[`order-${key}-${order[key]}`] = true
    })
  }

  const classes = classnames(
    {
      [`col`]: true,
      [`col-${span}`]: span && !isNaN(Number(span.toString())),
      [`offset-${offset}`]: offset && !isNaN(Number(offset.toString())),
      [`order-${order}`]: order && !isNaN(Number(order.toString())),
      ...responsiveClasses
    },
    className
  )

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

export default GridItem
