import { default as _Button } from './Button'
import { ButtonCompoundProps } from '../../types'
import ButtonGroup from './ButtonGroup'
import ButtonLink from './ButtonLink'

const Button = _Button as ButtonCompoundProps
Button.Group = ButtonGroup
Button.Link = ButtonLink

export default Button
