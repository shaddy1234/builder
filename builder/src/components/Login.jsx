import React from 'react'


function Login({formData, handleChange, handleSubmit}) {

    return (
        <div className='main-1'>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="FirstName"
                    className="form--input"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="LastName"
                    className="form--input"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default Login
