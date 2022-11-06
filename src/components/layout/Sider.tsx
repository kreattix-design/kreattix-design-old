import * as React from 'react'
import { SiderProps } from '../../types'
import { classnames } from '../../utils'
import { KreattixConsumer } from '../provider'
import { LayoutContext } from './Layout'

const generateId = (() => {
  let i = 0
  return (prefix = '') => {
    i += 1
    return `${prefix}${i}`
  }
})()

const Sider: React.FC<SiderProps> = (props) => (
  <LayoutContext.Consumer>
    {({ siderHook }) => {
      React.useEffect(() => {
        const uniqueId = generateId('sider-')
        siderHook.addSider(uniqueId)
        return () => siderHook.removeSider(uniqueId)
      }, [])

      return (
        <KreattixConsumer>
          {() => {
            const { children, className } = props
            const classes = classnames(
              {
                [`layout-sider`]: true
              },
              className
            )
            return <div className={classes}>{children}</div>
          }}
        </KreattixConsumer>
      )
    }}
  </LayoutContext.Consumer>
)

export default Sider
