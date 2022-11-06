import { default as KdButton } from './Button'
import { ButtonCompoundProps } from '../../types'
import ButtonGroup from './ButtonGroup'
import ButtonLink from './ButtonLink'

const Button = KdButton as ButtonCompoundProps
Button.Group = ButtonGroup
Button.Link = ButtonLink

export default Button
