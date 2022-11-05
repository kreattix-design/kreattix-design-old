import React from 'react'
import { TextWrapperProps } from '../../types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sliptWrapperProps = (props: { [key: string]: any }) => {
  const {
    children,
    mark,
    code,
    keyboard,
    underline,
    deleted,
    strong,
    italic,
    ...rest
  } = props
  const wrapperProps = {
    children,
    mark,
    code,
    keyboard,
    underline,
    deleted,
    strong,
    italic
  }
  return { wrapperProps, rest }
}

export const TextWrapper: React.FC<TextWrapperProps> = ({
  children,
  mark,
  code,
  keyboard,
  underline,
  deleted,
  strong,
  italic
}) => {
  let wrappedChild = <>{children}</>
  if (italic) wrappedChild = <i>{wrappedChild}</i>
  if (strong) wrappedChild = <strong>{wrappedChild}</strong>
  if (deleted) wrappedChild = <del>{wrappedChild}</del>
  if (underline) wrappedChild = <u>{wrappedChild}</u>
  if (mark) wrappedChild = <mark>{wrappedChild}</mark>
  if (keyboard) wrappedChild = <kbd>{wrappedChild}</kbd>
  if (code) wrappedChild = <code>{wrappedChild}</code>

  return wrappedChild
}
