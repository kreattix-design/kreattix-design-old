import * as React from 'react'
import { classnames } from '../../utils'
import { sliptWrapperProps, TextWrapper } from './TextWrapper'
import { TitleProps } from '../../types'
import { KreattixConsumer } from '../provider'

const Title: React.FC<TitleProps> = (props) => (
  <KreattixConsumer>
    {({ Title }) => {
      const {
        className,
        level = Title.level,
        variant = Title.variant,
        align = Title.align,
        ellipsis = Title.ellipsis,
        ...rest
      } = props
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

      const { wrapperProps, itemProps } = sliptWrapperProps(rest)

      const newProps = { className: classes, ...itemProps }

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
    }}
  </KreattixConsumer>
)

export default Title
