import React, { createContext } from 'react'
import { KreattixProviderProps } from '../../types'
import _ from 'lodash'

const DefaultConfig: KreattixProviderProps = {
  Icon: {
    icon: 'Close'
  }
}

const Kreattix = createContext<KreattixProviderProps>(DefaultConfig)

export const DefineKreattixConfig: (
  config: KreattixProviderProps
) => KreattixProviderProps = (config) => config

export const KreattixProvider: React.FC<{
  value: KreattixProviderProps
  children?: React.ReactNode
}> = ({ value, children }) => {
  return (
    <Kreattix.Provider value={_.merge(DefaultConfig, value)}>
      {children}
    </Kreattix.Provider>
  )
}

export const KreattixConsumer = Kreattix.Consumer
