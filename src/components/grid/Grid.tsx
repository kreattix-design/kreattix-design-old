import React, { FC } from 'react'
import { GridProps, ResponsiveGutters } from '../../types'
import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'

const Grid: FC<GridProps> = (props) => {
  const { Grid } = useKreattixContext()
  const {
    children,
    className,
    align = Grid.justify,
    justify = Grid.justify,
    direction = Grid.direction,
    gutter = Grid.gutter,
    ...rest
  } = props
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
