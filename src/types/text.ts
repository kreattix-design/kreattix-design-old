import React, { ReactNode } from 'react'
import { TextAlignments, Variants } from '../types'
import Paragraph from '../components/text/Paragraph'
import Title from '../components/text/Title'

export interface TextWrapperProps {
  children?: ReactNode
  mark?: boolean
  code?: boolean
  keyboard?: boolean
  underline?: boolean
  deleted?: boolean
  strong?: boolean
  italic?: boolean
  [key: string | number | symbol]: unknown
}

export interface TextBaseProps extends TextWrapperProps {
  className?: string
  variant?: Variants
  ellipsis?: boolean
}

export interface TextProps extends TextBaseProps {
  disabled?: boolean
}

export interface ParagraphProps extends TextBaseProps {
  align?: TextAlignments
}

export type TitleLevels = 1 | 2 | 3 | 4 | 5 | 6
export interface TitleProps extends TextBaseProps {
  level?: TitleLevels
  align?: TextAlignments
}

export interface TextCompoundProps
  extends React.ForwardRefExoticComponent<TextProps> {
  Paragraph: typeof Paragraph
  Title: typeof Title
}
