import React from 'react'

export default function Login() {
    return (
        <div>
            <h3>Put your login info here</h3>
            <form>
                <label for="userName">Username
                <input type="text" className = "userName" name="userName"></input>
                </label>
                <label for="password">Password
                <input type="text" className = "password" name="password"></input>
                </label>
                <button type="submit" id="loginButton">Log in</button>
            </form>
        </div>
    )
}
