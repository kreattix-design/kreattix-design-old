import React from 'react'
import { classnames } from '../../utils'
import { TextWrapper } from './TextWrapper'
import { TitleProps } from '../../types'

const Title: React.FC<TitleProps> = ({
  className,
  variant,
  level = 1,
  align,
  ellipsis,
  ...rest
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

  const props = { className: classes, ...rest }

  switch (level) {
    case 6:
      return (
        <h6 {...props}>
          <TextWrapper {...rest} />
        </h6>
      )
    case 5:
      return (
        <h5 {...props}>
          <TextWrapper {...rest} />
        </h5>
      )
    case 4:
      return (
        <h4 {...props}>
          <TextWrapper {...rest} />
        </h4>
      )
    case 3:
      return (
        <h3 {...props}>
          <TextWrapper {...rest} />
        </h3>
      )
    case 2:
      return (
        <h2 {...props}>
          <TextWrapper {...rest} />
        </h2>
      )
    case 1:
    default:
      return (
        <h1 {...props}>
          <TextWrapper {...rest} />
        </h1>
      )
  }
}

export default Title
