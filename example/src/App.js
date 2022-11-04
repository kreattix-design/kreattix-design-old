import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Box, Button, Icon, Text, KreattixProvider } from 'kreattix-design'
import { KreattixConfig } from './KreattixConfig'

const App = () => {
  return (
    <KreattixProvider value={KreattixConfig}>
      <Box size='fullscreen' align='center' justify='center'>
        <img src={logo} className='App-logo' alt='logo' />
        <Text.Title level={3} variant='primary'>
          Edit <Text code>src/App.js</Text> and save to reload.
        </Text.Title>
        <Icon />
        <Button.Link
          className='App-link'
          href='https://reactjs.org/'
          target='_blank'
          size='large'
          variant='primary'
          type='solid'
        >
          Learn React
        </Button.Link>
      </Box>
    </KreattixProvider>
  )
}

export default App
