import { IconNames } from 'kreattix-design-icons/lib/types'
import React, { FC } from 'react'
import { ButtonProps } from '../../types'
import { classnames } from '../../utils'
import Icon from '../icon'
import { useKreattixContext } from '../provider'

const Button: FC<ButtonProps> = (props) => {
  const { Button } = useKreattixContext()
  const {
    children,
    className,
    variant = Button.variant,
    size = Button.size,
    icon = Button.icon,
    iconPosition = Button.iconPosition,
    rounded = Button.rounded,
    disabled = Button.disabled,
    type = Button.type,
    ...rest
  } = props
  const classes = classnames(
    {
      [`btn`]: true,
      [`btn-disabled`]: disabled,
      [`btn-${variant}`]: variant,
      [`btn-${type}`]: type,
      [`btn-${size}`]: size,
      [`btn-rounded`]: rounded,
      [`btn-with-icon`]: icon && children,
      [`btn-only-icon`]: icon && !children,
      [`btn-icon-${iconPosition}`]: icon && iconPosition
    },
    className
  )

  const iconClasses = classnames({
    [`btn-icon`]: true
  })

  const iconComponent = (icon: IconNames) => (
    <span className={iconClasses}>
      <Icon icon={icon} />
    </span>
  )

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {!icon ? (
        children
      ) : (
        <>
          {iconPosition === 'start' && iconComponent(icon)}
          {children && <span>{children}</span>}
          {iconPosition === 'end' && iconComponent(icon)}
        </>
      )}
    </button>
  )
}

export default Button
