import React from 'react'

const Signup = () => (
    <div style={{marginTop: '20px'}}>
        <form>
            <div>
                <input type="text" name="name" placeholder="Name"/>
                <label htmlFor="name">Name</label>
            </div>
            <div>
                <input type="text" name="username" placeholder="Username"/>
                <label htmlFor="username">Username</label>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" />
                <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Sign Up"/>
        </form>
    </div>
)

export default Signup