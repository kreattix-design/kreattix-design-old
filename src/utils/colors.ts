import { getPrefix } from './classes'

const getColor: (color: string) => string = (color) => {
  return `var(--${getPrefix()}-${color})`
}

const getShades: (color: string) => { [key: string]: string } = (color) => {
  return {
    [color]: getColor(color),
    [`${color}100`]: getColor(`${color}-100`),
    [`${color}200`]: getColor(`${color}-200`),
    [`${color}300`]: getColor(`${color}-300`),
    [`${color}400`]: getColor(`${color}-400`),
    [`${color}500`]: getColor(`${color}-500`),
    [`${color}600`]: getColor(`${color}-600`),
    [`${color}700`]: getColor(`${color}-700`),
    [`${color}800`]: getColor(`${color}-800`),
    [`${color}900`]: getColor(`${color}-900`)
  }
}

export const Colors = {
  ...getShades('red'),
  ...getShades('orange'),
  ...getShades('amber'),
  ...getShades('yellow'),
  ...getShades('lime'),
  ...getShades('green'),
  ...getShades('deepGreen'),
  ...getShades('teal'),
  ...getShades('cyan'),
  ...getShades('lightBlue'),
  ...getShades('blue'),
  ...getShades('indigo'),
  ...getShades('violet'),
  ...getShades('deepPurple'),
  ...getShades('purple'),
  ...getShades('pink'),
  ...getShades('rose'),
  black: getColor('black'),
  white: getColor('white'),
  gray: getColor('gray-600'),
  gray100: getColor('gray-100'),
  gray200: getColor('gray-200'),
  gray300: getColor('gray-300'),
  gray400: getColor('gray-400'),
  gray500: getColor('gray-500'),
  gray600: getColor('gray-600'),
  gray700: getColor('gray-700'),
  gray800: getColor('gray-800'),
  gray900: getColor('gray-900'),
  primary: getColor('primary'),
  primaryHover: getColor('primary-hover'),
  primaryActive: getColor('primary-active'),
  secondary: getColor('secondary'),
  secondaryHover: getColor('secondary-hover'),
  secondaryActive: getColor('secondary-active'),
  success: getColor('success'),
  successHover: getColor('success-hover'),
  successActive: getColor('success-active'),
  info: getColor('info'),
  infoHover: getColor('info-hover'),
  infoActive: getColor('info-active'),
  warning: getColor('warning'),
  warningHover: getColor('warning-hover'),
  warningActive: getColor('warning-active'),
  danger: getColor('danger'),
  dangerHover: getColor('danger-hover'),
  dangerActive: getColor('danger-active')
}
