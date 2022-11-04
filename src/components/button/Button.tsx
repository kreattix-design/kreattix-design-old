import React from 'react'
import { ButtonProps } from '../../types'
import { classnames } from '../../utils'
import Icon from '../icon'
import { IconNames } from 'kreattix-design-icons/lib/types'

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  size,
  icon,
  iconPosition = 'start',
  rounded = false,
  disabled,
  type = 'solid',
  ...rest
}) => {
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
    <button className={classes} {...rest} disabled={disabled}>
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
