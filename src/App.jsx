import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import User from './components/User'

const flag = false;
const friends = ["ayşe","fatma","hayriye","tufan","neco"]

function App() {
  return(
    <div>
    <h1>Hello World!</h1>
    <Header />
    {flag ? <div>olmak</div> : <div>olmamak</div> }
    <User userName="ismail" 
          userSurname ="taştemir" 
          age={30} 
          userFriends={friends} 
          //isLogging={true} 
          userAddress={{
            title:"Samsun/Terme",
            zip: 55600,
          }}/>
    </div>
  )
}


export default App
