import * as React from 'react'
import { ButtonGroupProps } from '../../types'
import { classnames } from '../../utils'
import { KreattixConsumer } from '../provider'

const ButtonGroup: React.FC<ButtonGroupProps> = (props) => (
  <KreattixConsumer>
    {({ ButtonGroup }) => {
      const {
        children,
        className,
        type = ButtonGroup.type,
        variant = ButtonGroup.variant,
        size = ButtonGroup.size,
        rounded = ButtonGroup.rounded,
        icon = ButtonGroup.icon,
        iconPosition = ButtonGroup.iconPosition,
        ...rest
      } = props
      const classes = classnames(
        {
          [`btn-group`]: true
        },
        className
      )
      const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...{ type, variant, size, rounded, icon, iconPosition },
            ...child.props
          })
        }
        return child
      })
      return (
        <div className={classes} {...rest}>
          {childrenWithProps}
        </div>
      )
    }}
  </KreattixConsumer>
)
export default ButtonGroup
