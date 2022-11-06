import * as React from 'react'
import { LayoutContextProps, LayoutProps } from '../../types'
import { classnames } from '../../utils'
import { KreattixConsumer } from '../provider'

export const LayoutContext = React.createContext<LayoutContextProps>({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
})

const Layout: React.FC<LayoutProps> = (props) => {
  const [siders, setSiders] = React.useState<string[]>([])
  const contextValue = React.useMemo(
    () => ({
      siderHook: {
        addSider: (id: string) => {
          setSiders((prev) => [...prev, id])
        },
        removeSider: (id: string) => {
          setSiders((prev) => prev.filter((currentId) => currentId !== id))
        }
      }
    }),
    []
  )
  return (
    <KreattixConsumer>
      {() => {
        const { children, className } = props
        const classes = classnames(
          {
            [`layout`]: true,
            [`layout-has-sider`]: siders && siders.length
          },
          className
        )
        return (
          <LayoutContext.Provider value={contextValue}>
            <div className={classes}>{children}</div>
          </LayoutContext.Provider>
        )
      }}
    </KreattixConsumer>
  )
}

export default Layout
