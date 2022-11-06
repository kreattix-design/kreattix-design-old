import React, { FC } from 'react'
import { ContainerProps } from '../../types/container'
import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'

const Container: FC<ContainerProps> = (props) => {
  const { Container } = useKreattixContext()
  const { children, className, fluid = Container.fluid, ...rest } = props

  const classes = classnames(
    {
      [`container`]: !fluid,
      [`container-fluid`]: fluid === true,
      [`container-${fluid}`]: fluid !== true && fluid !== false
    },
    className
  )
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

export default Container
