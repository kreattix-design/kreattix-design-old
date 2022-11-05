import React from 'react'
import { classnames } from '../../utils'
import { sliptWrapperProps, TextWrapper } from './TextWrapper'
import { TitleProps } from '../../types'

const Title: React.FC<TitleProps> = ({
  className,
  variant,
  level = 1,
  align,
  ellipsis,
  ...props
}) => {
  const classes = classnames(
    {
      [`text`]: true,
      [`text-title`]: true,
      [`text-${variant}`]: variant,
      [`text-${align}`]: align,
      [`text-ellipsis-single-line`]: ellipsis
    },
    className
  )

  const { wrapperProps, rest } = sliptWrapperProps(props)

  const newProps = { className: classes, ...rest }

  switch (level) {
    case 6:
      return (
        <h6 {...newProps}>
          <TextWrapper {...wrapperProps} />
        </h6>
      )
    case 5:
      return (
        <h5 {...newProps}>
          <TextWrapper {...wrapperProps} />
        </h5>
      )
    case 4:
      return (
        <h4 {...newProps}>
          <TextWrapper {...wrapperProps} />
        </h4>
      )
    case 3:
      return (
        <h3 {...newProps}>
          <TextWrapper {...wrapperProps} />
        </h3>
      )
    case 2:
      return (
        <h2 {...newProps}>
          <TextWrapper {...wrapperProps} />
        </h2>
      )
    case 1:
    default:
      return (
        <h1 {...newProps}>
          <TextWrapper {...wrapperProps} />
        </h1>
      )
  }
}

export default Title
