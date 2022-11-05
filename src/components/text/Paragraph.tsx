import React from 'react'
import { classnames } from '../../utils'
import { sliptWrapperProps, TextWrapper } from './TextWrapper'
import { ParagraphProps } from '../../types'

const Paragraph: React.FC<ParagraphProps> = ({
  className,
  variant,
  align = 'justify',
  ellipsis = false,
  ...props
}) => {
  const classes = classnames(
    {
      [`text`]: true,
      [`text-${variant}`]: variant,
      [`text-${align}`]: align,
      [`text-ellipsis-single-line`]: ellipsis
    },
    className
  )

  const { wrapperProps, rest } = sliptWrapperProps(props)

  return (
    <p className={classes} {...rest}>
      <TextWrapper {...wrapperProps} />
    </p>
  )
}

export default Paragraph
