import * as React from 'react'
import { classnames } from '../../utils'
import { sliptWrapperProps, TextWrapper } from './TextWrapper'
import { TextProps } from '../../types'
import { KreattixConsumer } from '../provider'

const Text: React.FC<TextProps> = (props) => (
  <KreattixConsumer>
    {({ Text }) => {
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
    }}
  </KreattixConsumer>
)

export default Text
