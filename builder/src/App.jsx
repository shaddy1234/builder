import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Updater from './components/Updater'

function App() {
   const [formData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
      })

    function handleChange(e) {
        setFormData(prevFormData => ({
          ...prevFormData,
          [e.target.name]: e.target.value
        }));
        console.log(formData)
      }
      function handleSubmit(e) {
        e.preventDefault()
      }
  return (
    <>
    <div className='two'>
      <Login formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Updater formData={formData}/>
    </div>
    
    </>
  )
}

export default App
