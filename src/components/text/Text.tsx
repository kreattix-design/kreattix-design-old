import React, { FC } from 'react'
import { TextProps } from '../../types'
import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'
import { sliptWrapperProps, TextWrapper } from './TextWrapper'

const Text: FC<TextProps> = (props) => {
  const { Text } = useKreattixContext()
  const {
    className,
    variant = Text.variant,
    ellipsis = Text.ellipsis,
    disabled,
    ...rest
  } = props
  const classes = classnames(
    {
      [`text`]: true,
      [`text-${variant}`]: variant,
      [`text-disabled`]: disabled,
      [`text-ellipsis-single-line`]: ellipsis === true
    },
    className
  )

  const { wrapperProps, itemProps } = sliptWrapperProps(rest)

  return (
    <span className={classes} {...itemProps}>
      <TextWrapper {...wrapperProps} />
    </span>
  )
}

export default Text
