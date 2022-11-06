import * as IconsList from 'kreattix-design-icons'
import { IconNameListProps } from 'kreattix-design-icons'
import React from 'react'
import { IconProps } from '../../types'
import { classnames } from '../../utils'
import { useKreattixContext } from '../provider'

const Icon: React.FC<IconProps> = (props) => {
  const { Icon } = useKreattixContext()
  const {
    icon = Icon.icon,
    shape = Icon.shape,
    type = Icon.type,
    size = Icon.size,
    color = Icon.color,
    style,
    className,
    ...rest
  } = props
  const classes = classnames(
    {
      [`icon`]: true,
      [`icon-${size}`]: size
    },
    className
  )
  const Icons: IconNameListProps = IconsList
  let iconName = icon
  const shapes = ['circle', 'square']
  const styles: React.CSSProperties = style || {}
  if (color) {
    styles.color = color
  }

  if (shape && shapes.includes(shape)) {
    switch (shape) {
      case 'square':
        iconName += 'Square'
        break
      default:
        iconName += 'Circle'
        break
    }
    switch (type) {
      case 'filled':
        iconName += 'Filled'
        break
      case 'toned':
        iconName += 'Toned'
        break
      default:
        iconName += 'Outlined'
        break
    }
  }

  if (!Icons[iconName]) return null

  return (
    <div className={classes} style={styles} {...rest}>
      {React.createElement(Icons[iconName], {})}
    </div>
  )
}

export default Icon
