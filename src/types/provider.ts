import { IconProps } from './icon'

export interface KreattixProviderProps {
  Icon: Omit<IconProps, 'style' | 'className'>
}
