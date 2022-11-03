import { default as KdButton } from './Button'
import { ButtonCompoundProps } from '../../types'
import ButtonGroup from './ButtonGroup'
import ButtonLink from './ButtonLink'

const Button = KdButton as ButtonCompoundProps
Button.Group = ButtonGroup
Button.Link = ButtonLink

export * from './Button'
export * from './ButtonGroup'
export * from './ButtonLink'
export default Button
