import { default as KdGrid } from './Grid'
import GridItem from './GridItem'
import { GridCompoundProps } from '../../types'

const Grid = KdGrid as GridCompoundProps
Grid.Item = GridItem

export default Grid
