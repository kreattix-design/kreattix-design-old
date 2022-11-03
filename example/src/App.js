import React from 'react'
import logo from './logo.svg'
import './App.css'
import { Box } from 'kreattix-design'

const App = () => {
  return (
    <Box
      className='App-header bg-dark'
      size='fullscreen'
      align='center'
      justify='center'
    >
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className='App-link'
        href='https://reactjs.org'
        target='_blank'
        rel='noopener noreferrer'
      >
        Learn React
      </a>
    </Box>
  )
}

export default App
