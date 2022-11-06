import React, { FC } from 'react'
import { ParagraphProps } from '../../types'
import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'
import { sliptWrapperProps, TextWrapper } from './TextWrapper'

const Paragraph: FC<ParagraphProps> = (props) => {
  const { Paragraph } = useKreattixContext()
  const {
    className,
    variant = Paragraph.variant,
    align = Paragraph.align,
    ellipsis = Paragraph.ellipsis,
    ...rest
  } = props
  const classes = classnames(
    {
      [`text`]: true,
      [`text-${variant}`]: variant,
      [`text-${align}`]: align,
      [`text-ellipsis-single-line`]: ellipsis
    },
    className
  )

  const { wrapperProps, itemProps } = sliptWrapperProps(rest)

  return (
    <p className={classes} {...itemProps}>
      <TextWrapper {...wrapperProps} />
    </p>
  )
}

export default Paragraph
