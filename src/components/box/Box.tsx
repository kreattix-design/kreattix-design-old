import React from 'react'
import { classnames } from '../../utils'
import { BoxProps } from '../../types'

const Box: React.FC<BoxProps> = ({
  children,
  className,
  align,
  justify,
  direction = 'vertical',
  size,
  flex,
  wrap = true,
  gutter,
  ...rest
}) => {
  const isFlex = align || justify || direction || flex

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
        [`g-${gutter}`]: gutter || gutter === 0
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

export default Box
