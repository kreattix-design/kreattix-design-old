import logo from './logo.svg'
import './App.css'
import { Box, Text } from 'kreattix-design'

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
      <Text.Paragraph>
        Edit <Text code>src/App.js</Text> and save to reload.
      </Text.Paragraph>
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
