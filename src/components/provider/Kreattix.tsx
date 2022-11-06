import React, { createContext, ReactNode, useContext } from 'react'
import { KreattixProviderProps } from '../../types'
import { merge } from 'lodash'
import DefaultConfig from './DefaultConfig'

export const KreattixContext =
  createContext<KreattixProviderProps>(DefaultConfig)

export const DefineKreattixConfig: (
  config: KreattixProviderProps
) => KreattixProviderProps = (config) => config

export const KreattixProvider: React.FC<{
  value: KreattixProviderProps
  children?: ReactNode
}> = ({ value, children }) => {
  return (
    <KreattixProvider value={merge(DefaultConfig, value)}>
      {children}
    </KreattixProvider>
  )
}

export const KreattixConsumer = KreattixContext.Consumer

export const useKreattixContext = () => useContext(KreattixContext)
