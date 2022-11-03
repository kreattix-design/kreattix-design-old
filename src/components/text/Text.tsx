import React from 'react'
import { classnames } from '../../utils'
import { TextWrapper } from './TextWrapper'
import { TextProps } from './types'

const Text: React.FC<TextProps> = ({
  className,
  variant,
  disabled,
  ellipsis,
  ...rest
}) => {
  const classes = classnames(
    {
      [`text`]: true,
      [`text-${variant}`]: variant,
      [`text-disabled`]: disabled,
      [`text-ellipsis-single-line`]: ellipsis === true
    },
    className
  )

  return (
    <span className={classes} {...rest}>
      <TextWrapper {...rest} />
    </span>
  )
}

export default Text
