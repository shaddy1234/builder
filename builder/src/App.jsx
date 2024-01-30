import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'

function App() {
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  return (
    <>
      <Login />
    </>
  )
}

export default App
