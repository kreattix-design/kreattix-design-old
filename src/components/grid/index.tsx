import { default as GridComponent } from './Grid'
import GridItem from './GridItem'
import { GridCompoundProps } from './types'

const Grid = GridComponent as GridCompoundProps
Grid.Item = GridItem

export * from './Grid'
export * from './GridItem'
export default Grid
