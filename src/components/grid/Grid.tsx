import React from 'react'
import { classnames } from '../../utils'
import { GridProps, ResponsiveGutters } from '../../types'

const Grid: React.FC<GridProps> = ({
  children,
  className,
  align,
  justify,
  direction,
  gutter,
  ...rest
}) => {
  const responsiveClasses: { [key: string]: boolean } = {}
  if (gutter && typeof gutter === 'object') {
    Object.keys(gutter).forEach((item) => {
      const key = item as keyof ResponsiveGutters
      responsiveClasses[`gap-${key}-${gutter[key]}`] = true
    })
  }
  const classes = classnames(
    {
      [`row`]: true,
      [`gap-${gutter}`]:
        (gutter || gutter === 0) && !isNaN(Number(gutter.toString())),
      ...responsiveClasses
    },
    classnames(
      {
        [`justify-${justify}`]: justify,
        [`direction-${direction}`]: direction,
        [`align-${align}`]: align
      },
      className,
      false
    )
  )

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

export default Grid
