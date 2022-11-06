import * as React from 'react'
import { classnames } from '../../utils'
import { sliptWrapperProps, TextWrapper } from './TextWrapper'
import { ParagraphProps } from '../../types'
import { KreattixConsumer } from '../provider'

const Paragraph: React.FC<ParagraphProps> = (props) => (
  <KreattixConsumer>
    {({ Paragraph }) => {
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
    }}
  </KreattixConsumer>
)

export default Paragraph
