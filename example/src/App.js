import React from 'react'
import logo from './logo.svg'
import './App.css'
import {
  Box,
  Button,
  Icon,
  Text,
  KreattixProvider,
  Container
} from 'kreattix-design'
import { KreattixConfig } from './KreattixConfig'

const App = () => {
  return (
    <KreattixProvider value={KreattixConfig}>
      <Box
        size='fullscreen'
        align='center'
        justify='center'
        className='bg-dark'
      >
        <img src={logo} className='App-logo' alt='logo' />
        <Container className='bg-blue' fluid>
          <Text.Title
            level={3}
            className='text-light m-3 bg-dark'
            align='center'
          >
            Edit <Text className='text-lightBlue-100'>src/App.js</Text> and save
            to reload.
          </Text.Title>
        </Container>
        <Box direction='horizontal'>
          <Icon icon='ArrowLeft' />
          <Icon icon='Close' />
          <Icon icon='ArrowRight' />
        </Box>
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
