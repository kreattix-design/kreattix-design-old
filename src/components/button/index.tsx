import { default as KdButton } from './Button'
import { ButtonCompoundProps } from '../../types'
import ButtonGroup from './ButtonGroup'

const Button = KdButton as ButtonCompoundProps
Button.Group = ButtonGroup

export * from './Button'
export * from './ButtonGroup'
export default Button
