import { default as _Layout } from './Layout'
import { LayoutCompoundProps } from '../../types'
import Sider from './Sider'

const Layout = _Layout as LayoutCompoundProps
Layout.Sider = Sider

export default Layout
