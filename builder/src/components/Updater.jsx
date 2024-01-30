import React from 'react'

function Updater({formData}) {
  return (
    <div className='main-1'>
      <form action="" className='form'>
        <h2>Hello and Welcome</h2>
        <p>Your name is {formData.firstName} {formData.lastName}</p>
        <p>Your email is {formData.email}</p>
        <h4>Enjoy!!!</h4>
      </form>
    </div>
  )
}

export default Updater
