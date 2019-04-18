import React, {Component} from 'react'

class Signup extends Component {
    render() {
        return(
            <div className="signupPage">
                <h3>Need an account? Signup Here!</h3>
                <form>
                    <div>
                        <input type="text" name="firstName" placeholder="First Name" />
                        <label htmlFor="firstName">First Name</label>

                        <input type="text" name="lastName" placeholder="Last Name" />
                        <label htmlFor="lastName">Last Name</label>

                        <input type="text" name="username" placeholder="Username" />
                        <label htmlFor="username">Username</label>

                        <input type="text" name="email" placeholder="Email" />
                        <label htmlFor="email">Email</label>

                        <input type="password" name="password" placeholder="Password" />
                        <label htmlFor="password">Enter a Password</label>
                    </div>

                    <input type="submit" value="Create Account"/>
                </form>
            </div>
        )
    }
}

export default Signup
