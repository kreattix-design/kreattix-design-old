import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Box, Button, Text } from 'kreattix-design'

const App = () => {
  return (
    <Box size='fullscreen' align='center' justify='center'>
      <img src={logo} className='App-logo' alt='logo' />
      <Text.Title level={3} variant='primary'>
        Edit <Text code>src/App.js</Text> and save to reload.
      </Text.Title>
      <Button.Link
        className='App-link'
        href='https://reactjs.org/'
        target='_blank'
      >
        Learn React
      </Button.Link>
    </Box>
  )
}

export default App
