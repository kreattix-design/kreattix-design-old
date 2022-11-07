import * as React from 'react'
import Sider from '../components/layout/Sider'

export interface LayoutContextProps {
  siderHook: {
    addSider: (id: string) => void
    removeSider: (id: string) => void
  }
}

export interface LayoutProps {
  children?: React.ReactNode
  className?: string
  hasSider?: boolean
}

export interface SiderProps {
  children?: React.ReactNode
  className?: string
}

export interface LayoutCompoundProps
  extends React.ForwardRefExoticComponent<LayoutProps> {
  Sider: typeof Sider
}
