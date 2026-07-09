import React, { useState } from 'react'
import styles from "./App.module.css"
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
const App = () => {
  const [calVal, setCalVal] = useState("")
  
  function onButtonClick(buttonText){
   if(buttonText==="C"){
setCalVal("")
   }else if(buttonText==="="){
    if(calVal){

      const result=eval(calVal)
      setCalVal(result)
    }
   }else if(buttonText=="AC"){
setCalVal(item=>item.slice(0,-1))
  
   }
   else{
    const newDisplayValue=calVal + buttonText
    setCalVal(newDisplayValue)
   }
  
  }
  return (
    <div className={styles.calculator} >
     <Display displayValue={calVal}/>
      <ButtonsContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App