import { default as _Grid } from './Grid'
import GridItem from './GridItem'
import { GridCompoundProps } from '../../types'

const Grid = _Grid as GridCompoundProps
Grid.Item = GridItem

export default Grid
