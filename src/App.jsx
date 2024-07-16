import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dice from './Dice'
import './App.css'

function App() {

  return (
    <div className="App">
      <Dice />
      <Dice numDice={2} title="Craps" maxVal={6} />
    </div>
  )
}

export default App
