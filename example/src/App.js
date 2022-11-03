import logo from './logo.svg'
import './App.css'
import { Icon, Colors } from 'kreattix-design'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
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
        <Icon
          icon='Logo'
          shape='square'
          type='toned'
          size='large'
          color={Colors.purple200}
        />
      </header>
    </div>
  )
}

export default App
