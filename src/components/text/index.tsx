import { default as TextComponent } from './Text'
import Paragraph from './Paragraph'
import Title from './Title'
import { TextCompoundProps } from './types'

const Text = TextComponent as TextCompoundProps
Text.Paragraph = Paragraph
Text.Title = Title

export * from './types'
export * from './Text'
export * from './Paragraph'
export * from './Title'

export default Text
