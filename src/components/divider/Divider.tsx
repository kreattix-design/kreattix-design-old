import * as React from 'react'
import { DividerProps } from '../../types/divider'
import { classnames } from '../../utils'
import { KreattixConsumer } from '../provider'

const Divider: React.FC<DividerProps> = (props) => (
  <KreattixConsumer>
    {({ Divider }) => {
      const {
        children,
        className,
        direction = Divider.direction,
        type = Divider.type,
        plain = Divider.plain,
        orientation = Divider.orientation
      } = props
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
    }}
  </KreattixConsumer>
)

export default Divider
