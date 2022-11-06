import { default as _Text } from './Text'
import Paragraph from './Paragraph'
import Title from './Title'
import { TextCompoundProps } from '../../types'

const Text = _Text as TextCompoundProps
Text.Paragraph = Paragraph
Text.Title = Title

export default Text
