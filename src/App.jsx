import React, { useState } from 'react'
import styles from "./App.module.css"
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
const App = () => {
  const [calVal, setCalVal] = useState("")
  return (
    <div className={styles.calculator} >
     <Display displayValue={calVal}/>
      <ButtonsContainer/>
    </div>
  )
}

export default App