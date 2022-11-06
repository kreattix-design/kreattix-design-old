import React, { Children, cloneElement, FC, isValidElement } from 'react'
import { ButtonGroupProps } from '../../types'
import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
  const { ButtonGroup } = useKreattixContext()
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
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
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
}
export default ButtonGroup
