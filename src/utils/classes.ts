import { config } from '../utils'

export type getPrefixProps = () => string
export type addPrefixProps = (classes: string | string[]) => string
export type mergeClassesProps = (classes: string[]) => string
export type classnamesProps = (
  themeClasses: string | { [key: string]: unknown },
  customClass?: string,
  prefix?: boolean
) => string

export const getPrefix: getPrefixProps = () => config.prefix

export const mergeClasses: mergeClassesProps = (classes) =>
  classes.join(' ').trim()

export const addPrefix: addPrefixProps = (classes) => {
  if (!classes || (classes && classes.length <= 0)) return ''
  if (typeof classes === 'string') return [getPrefix(), classes].join('-')
  return mergeClasses(
    classes.map((singleClass) => [getPrefix(), singleClass].join('-'))
  )
}

export const classnames: classnamesProps = (
  themeClasses,
  customClass = '',
  prefix = true
) => {
  const classes: string[] = []
  if (typeof themeClasses === 'string') {
    classes.push(themeClasses)
  } else {
    Object.keys(themeClasses).forEach((singleClass) => {
      if (themeClasses[singleClass]) classes.push(singleClass)
    })
  }

  if (prefix === false) {
    return mergeClasses([...classes, customClass])
  } else {
    return mergeClasses([addPrefix(classes), customClass])
  }
}
