import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Home_Button } from '../components'
import './App.css'
import { Bro_Chat } from '../Pages'
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div> */}
     
      {/* <div>  */}
      {/* <h1>ceceec</h1> */}
      <Outlet />
        {/* </div> */}
    {/* </div> */}
    </>
  )
}

export default App
