import React from 'react'
import { DividerProps } from '../../types/divider'
import { classnames } from '../../utils'

const Divider: React.FC<DividerProps> = ({
  children,
  className,
  direction = 'horizontal',
  type = 'solid',
  plain = false,
  orientation = 'center'
}) => {
  const classes = classnames(
    {
      [`divider`]: true,
      [`divider-with-text`]: direction === 'horizontal' && children,
      [`divider-${direction}`]: direction,
      [`divider-${type}`]: type,
      [`divider-plain`]: plain,
      [`divider-${orientation}`]: orientation
    },
    className
  )
  const innerTextClasses = classnames({
    [`divider-inner-text`]: true
  })
  return (
    <div className={classes}>
      {direction === 'horizontal' ? (
        <div className={innerTextClasses}>{children}</div>
      ) : null}
    </div>
  )
}

export default Divider
