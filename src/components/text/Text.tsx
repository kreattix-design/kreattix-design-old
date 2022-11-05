import React from 'react'
import { classnames } from '../../utils'
import { sliptWrapperProps, TextWrapper } from './TextWrapper'
import { TextProps } from '../../types'

const Text: React.FC<TextProps> = ({
  className,
  variant,
  disabled,
  ellipsis,
  ...props
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

  const { wrapperProps, rest } = sliptWrapperProps(props)

  return (
    <span className={classes} {...rest}>
      <TextWrapper {...wrapperProps} />
    </span>
  )
}

export default Text
