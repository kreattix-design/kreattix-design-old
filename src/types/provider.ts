import { BoxProps } from './box'
import { ButtonGroupProps, ButtonLinkProps, ButtonProps } from './button'
import { ContainerProps } from './container'
import { DividerProps } from './divider'
import { GridProps } from './grid'
import { IconProps } from './icon'
import { ParagraphProps, TextProps, TitleProps } from './text'

export interface KreattixProviderProps {
  Icon: Pick<IconProps, 'icon' | 'shape' | 'type' | 'size' | 'color'>
  Box: Pick<
    BoxProps,
    'align' | 'justify' | 'direction' | 'size' | 'flex' | 'wrap' | 'gutter'
  >
  Button: Pick<
    ButtonProps,
    | 'type'
    | 'variant'
    | 'size'
    | 'rounded'
    | 'disabled'
    | 'icon'
    | 'iconPosition'
  >
  ButtonLink: Pick<
    ButtonLinkProps,
    'type' | 'variant' | 'size' | 'rounded' | 'icon' | 'iconPosition'
  >
  ButtonGroup: Pick<
    ButtonGroupProps,
    'type' | 'variant' | 'size' | 'rounded' | 'icon' | 'iconPosition'
  >
  Divider: Pick<DividerProps, 'direction' | 'type' | 'plain' | 'orientation'>
  Grid: Pick<GridProps, 'align' | 'justify' | 'direction' | 'gutter'>
  Text: Pick<TextProps, 'variant' | 'ellipsis' | 'disabled'>
  Paragraph: Pick<ParagraphProps, 'variant' | 'ellipsis' | 'align'>
  Title: Pick<TitleProps, 'variant' | 'ellipsis' | 'align' | 'level'>
  Container: Pick<ContainerProps, 'fluid'>
}
