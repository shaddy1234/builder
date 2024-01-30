import React from 'react'

function Login() {
    return (
        <div className='main-1'>
            <form className="form" >
                <input
                    type="text"
                    placeholder="FirstName"
                    className="form--input"
                    name="FirstName"
                    value={FormData.firstName}
                />
                <input
                    type="text"
                    placeholder="LastName"
                    className="form--input"
                    name="FirstName"
                    value={FormData.lastName}
                />
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name="FirstName"
                    value={FormData.email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="FirstName"
                    value={FormData.password}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    value={FormData.confirmPassword}
                />

                {/* <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"

                    />
                    <label htmlFor="okayToEmail">I am sure am Signing Up</label>
                </div> */}
                <button
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
            <div>

            </div>
        </div>
    )
}

export default Login
