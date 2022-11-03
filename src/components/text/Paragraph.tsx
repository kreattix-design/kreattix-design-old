import React from 'react'
import { classnames } from '../../utils'
import { TextWrapper } from './TextWrapper'
import { ParagraphProps } from '../../types'

const Paragraph: React.FC<ParagraphProps> = ({
  className,
  variant,
  align = 'justify',
  ellipsis = false,
  ...rest
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

  return (
    <p className={classes} {...rest}>
      <TextWrapper {...rest} />
    </p>
  )
}

export default Paragraph
