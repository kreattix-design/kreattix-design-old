import React from 'react'
import { ButtonGroupProps } from '../../types'
import { classnames } from '../../utils'

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  ...rest
}) => {
  const classes = classnames(
    {
      [`btn-group`]: true
    },
    className
  )

  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...rest, ...child.props })
    }
    return child
  })
  return <div className={classes}>{childrenWithProps}</div>
}

export default ButtonGroup
