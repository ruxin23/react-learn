import { useContext,useRef,useEffect } from 'react'
import { ThemeContext } from './ThemeContext'
import './App.css'

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const usernameRef = useRef<HTMLInputElement>(null)
  const {state,dispatch} = useContext(ThemeContext)
  console.log(state)

  useEffect(()=>{
    inputRef.current?.focus()
  },[])

  const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(usernameRef.current?.value)
  }
  return (
    <>
      <button onClick={() => dispatch({type:"CHANGE_THEME"})}>CHANGE THEME</button>
      <button onClick={() => dispatch({type:"CHANGE_FONTSIZE",payload:20})}>CHANGE FONT SIZE</button>
      <div>
        <input ref={inputRef} type="text" placeholder="focus here"></input>
        <input ref={usernameRef} type="text" placeholder="username"></input>
        <button onClick={handleClick}>Submit</button>
      </div>
      
    </>
  )
}

export default App
