import * as React from 'react'
import { classnames } from '../../utils'
import { BoxProps, ResponsiveGutters } from '../../types'
import { KreattixConsumer } from '../provider'

const Box: React.FC<BoxProps> = (props) => (
  <KreattixConsumer>
    {({ Box }) => {
      const {
        children,
        className,
        align = Box.align,
        justify = Box.justify,
        direction = Box.direction,
        size = Box.size,
        flex = Box.flex,
        wrap = Box.wrap,
        gutter = Box.gutter,
        ...rest
      } = props
      const isFlex = align || justify || direction || flex

      const responsiveClasses: { [key: string]: boolean } = {}
      if (gutter && typeof gutter === 'object') {
        Object.keys(gutter).forEach((item) => {
          const key = item as keyof ResponsiveGutters
          responsiveClasses[`g-${key}-${gutter[key]}`] = true
        })
      }
      const classes = classnames(
        {
          [`box`]: true,
          [`box-flex`]: isFlex,
          [`box-inline`]: !isFlex && size === 'hug-content',
          [`box-flex-inline`]: isFlex && size === 'hug-content',
          [`box-${size}`]: size && size !== 'hug-content'
        },
        classnames(
          {
            [`align-${align}`]: align,
            [`justify-${justify}`]: justify,
            [`direction-${direction}`]: direction,
            [`wrap`]: wrap,
            [`g-${gutter}`]:
              (gutter || gutter === 0) && !isNaN(Number(gutter.toString())),
            ...responsiveClasses
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
    }}
  </KreattixConsumer>
)

export default Box
