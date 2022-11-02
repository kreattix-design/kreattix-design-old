import React from 'react'
import icon from './icon.svg'
import './scss/kreattix-design.scss'

export interface ComponentProps {
  title: string
}

export const Component: React.FC<ComponentProps> = ({ title }) => {
  return (
    <div>
      <div>{title}</div>
      <img src={icon} />
    </div>
  )
}
