import React from 'react'

function Login() {
    return (
        <div>
            <form className="form" >
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                />

                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"

                    />
                    {/* <label htmlFor="okayToEmail">I want to join the newsletter</label> */}
                </div>
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
