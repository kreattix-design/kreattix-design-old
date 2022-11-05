import { KreattixProviderProps } from '../../types'

const DefaultConfig: KreattixProviderProps = {
  Icon: {
    icon: 'Close'
  },
  Box: {
    direction: 'vertical',
    wrap: true,
    gutter: 2
  },
  Button: {
    iconPosition: 'start',
    rounded: false,
    type: 'solid'
  },
  ButtonLink: {
    iconPosition: 'start',
    rounded: false,
    type: 'text'
  },
  ButtonGroup: {
    iconPosition: 'start',
    rounded: false,
    type: 'solid'
  },
  Divider: {
    direction: 'horizontal',
    type: 'solid',
    plain: false,
    orientation: 'center'
  },
  Grid: {
    gutter: 3
  },
  Text: {
    ellipsis: false
  },
  Paragraph: {
    align: 'justify',
    ellipsis: false
  },
  Title: {
    level: 1,
    ellipsis: false
  },
  Container: {}
}

export default DefaultConfig
