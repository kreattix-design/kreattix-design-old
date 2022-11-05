import React from 'react'
import { classnames } from '../../utils'
import { KreattixConsumer } from '../provider'
import { ContainerProps } from '../../types/container'

const Container: React.FC<ContainerProps> = (props) => (
  <KreattixConsumer>
    {({ Container }) => {
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
    }}
  </KreattixConsumer>
)

export default Container
