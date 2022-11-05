import React from 'react'
import { ButtonLinkProps } from '../../types'
import { classnames } from '../../utils'
import Icon from '../icon'
import { IconNames } from 'kreattix-design-icons/lib/types'
import { KreattixConsumer } from '../provider'

const ButtonLink: React.FC<ButtonLinkProps> = (props) => (
  <KreattixConsumer>
    {({ ButtonLink }) => {
      const {
        children,
        className,
        variant = ButtonLink.variant,
        size = ButtonLink.size,
        icon = ButtonLink.icon,
        iconPosition = ButtonLink.iconPosition,
        rounded = ButtonLink.rounded,
        type = ButtonLink.type,
        ...rest
      } = props
      const classes = classnames(
        {
          [`btn`]: true,
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
        <a className={classes} {...rest}>
          {!icon ? (
            children
          ) : (
            <>
              {iconPosition === 'start' && iconComponent(icon)}
              {children && <span>{children}</span>}
              {iconPosition === 'end' && iconComponent(icon)}
            </>
          )}
        </a>
      )
    }}
  </KreattixConsumer>
)

export default ButtonLink
